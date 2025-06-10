import prisma from "../config/prisma-client.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `business-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error("Only JPEG and PNG images are allowed"));
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).single("image"); // Expect a single file with field name "image"

// Create a new business
export async function createBusiness(req, res) {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "Image upload error", details: err.message });
    } else if (err) {
      return res.status(400).json({ error: "Invalid image file", details: err.message });
    }

    try {
      const { name, products, location, description, socialMedia, hoursPerDay } = req.body;
      const userId = req.user.id; // From JWT middleware
      const isAdmin = req.user.role === "admin";

      // Validate required fields
      if (!name || !products || !location || !description || !hoursPerDay) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Validate products and socialMedia as valid JSON
      try {
        if (typeof products === "string") JSON.parse(products);
        if (socialMedia && typeof socialMedia === "string") JSON.parse(socialMedia);
      } catch (error) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "Invalid JSON format for products or socialMedia" });
      }

      // Ensure hoursPerDay is a valid number
      const hours = parseFloat(hoursPerDay);
      if (isNaN(hours) || hours < 0 || hours > 24) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "hoursPerDay must be a number between 0 and 24" });
      }

      const business = await prisma.business.create({
        data: {
          userId,
          name,
          products: typeof products === "string" ? JSON.parse(products) : products,
          location,
          description,
          imagePath: req.file ? `/uploads/${req.file.filename}` : null,
          socialMedia: socialMedia ? (typeof socialMedia === "string" ? JSON.parse(socialMedia) : socialMedia) : {},
          hoursPerDay: hours,
        },
        include: {
          user: {
            select: { id: true, username: true, email: true },
          },
        },
      });

      res.status(201).json({ message: "Business created successfully", business });
    } catch (error) {
      console.error("Error creating business:", error);
      if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
      res.status(500).json({ error: "Failed to create business", details: error.message });
    }
  });
}

// Get all businesses
export async function getAllBusinesses(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const userId = req.user.id;
    const isAdmin = req.user.role === "admin";

    // Validate date parameters if provided
    let where = isAdmin ? {} : { userId };
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      // @ts-ignore
      if (isNaN(start) || isNaN(end)) {
        return res.status(400).json({ error: "Invalid date format" });
      }
      where = { ...where, createdAt: { gte: start, lte: end } };
    }

    const businesses = await prisma.business.findMany({
      where,
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(500).json({ error: "Failed to fetch businesses", details: error.message });
  }
}

// Get a single business by ID
export async function getBusinessById(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const isAdmin = req.user.role === "admin";

    const business = await prisma.business.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
    });

    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }

    // Check if user is authorized to view this business
    if (!isAdmin && business.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized access to this business" });
    }

    res.status(200).json(business);
  } catch (error) {
    console.error("Error fetching business:", error);
    res.status(500).json({ error: "Failed to fetch business", details: error.message });
  }
}

// Update a business
export async function updateBusiness(req, res) {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "Image upload error", details: err.message });
    } else if (err) {
      return res.status(400).json({ error: "Invalid image file", details: err.message });
    }

    try {
      const { id } = req.params;
      const { name, products, location, description, socialMedia, hoursPerDay } = req.body;
      const userId = req.user.id;
      const isAdmin = req.user.role === "admin";

      // Check if business exists and user is authorized
      const business = await prisma.business.findUnique({
        where: { id: parseInt(id) },
      });

      if (!business) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(404).json({ error: "Business not found" });
      }

      if (!isAdmin && business.userId !== userId) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(403).json({ error: "Unauthorized to update this business" });
      }

      // Validate required fields
      if (!name || !products || !location || !description || !hoursPerDay) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Validate products and socialMedia as valid JSON
      try {
        if (typeof products === "string") JSON.parse(products);
        if (socialMedia && typeof socialMedia === "string") JSON.parse(socialMedia);
      } catch (error) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "Invalid JSON format for products or socialMedia" });
      }

      // Ensure hoursPerDay is a valid number
      const hours = parseFloat(hoursPerDay);
      if (isNaN(hours) || hours < 0 || hours > 24) {
        if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
        return res.status(400).json({ error: "hoursPerDay must be a number between 0 and 24" });
      }

      // Delete old image if a new one is uploaded
      if (req.file && business.imagePath) {
        try {
          fs.unlinkSync(path.join(process.cwd(), business.imagePath));
        } catch (error) {
          console.warn("Failed to delete old image:", error.message);
        }
      }

      const updatedBusiness = await prisma.business.update({
        where: { id: parseInt(id) },
        data: {
          name,
          products: typeof products === "string" ? JSON.parse(products) : products,
          location,
          description,
          imagePath: req.file ? `/uploads/${req.file.filename}` : business.imagePath,
          socialMedia: socialMedia ? (typeof socialMedia === "string" ? JSON.parse(socialMedia) : socialMedia) : undefined,
          hoursPerDay: hours,
        },
        include: {
          user: {
            select: { id: true, username: true, email: true },
          },
        },
      });

      res.status(200).json({ message: "Business updated successfully", data: updatedBusiness });
    } catch (error) {
      console.error("Error updating business:", error);
      if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Business not found" });
      }
      res.status(500).json({ error: "Failed to update business", details: error.message });
    }
  });
}

// Delete a business
export async function deleteBusiness(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const isAdmin = req.user.role === "admin";

    // Check if business exists and user is authorized
    const business = await prisma.business.findUnique({
      where: { id: parseInt(id) },
    });

    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }

    if (!isAdmin && business.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized to delete this business" });
    }

    // Delete image file if it exists
    if (business.imagePath) {
      try {
        fs.unlinkSync(path.join(process.cwd(), business.imagePath));
      } catch (error) {
        console.warn("Failed to delete image:", error.message);
      }
    }

    await prisma.business.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).json({ message: "Business deleted successfully" });
  } catch (error) {
    console.error("Error deleting business:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Business not found" });
    }
    res.status(500).json({ error: "Failed to delete business", details: error.message });
  }
}
