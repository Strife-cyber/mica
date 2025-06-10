import prisma from "../config/prisma-client.js";

// Create a new plan
export async function createPlan(req, res) {
  try {
    const { plan } = req.body;
    const userId  = req.user.id;

    // Validate required fields
    if (!userId || !plan) {
      return res.status(400).json({ error: "Missing required fields: userId and plan" });
    }

    // Validate plan value
    const validPlans = ["free", "premium", "enterprise"]; // Adjust as needed
    if (!validPlans.includes(plan.toLowerCase())) {
      return res.status(400).json({ error: `Invalid plan. Must be one of: ${validPlans.join(", ")}` });
    }

    // Check if user exists
    const user = await prisma.users.findUnique({ where: { id: parseInt(userId) } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newPlan = await prisma.plans.create({
      data: {
        userId: parseInt(userId),
        plan: plan.toLowerCase(),
      },
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
    });

    res.status(201).json({ message: "Plan created successfully", plan: newPlan });
  } catch (error) {
    console.error("Error creating plan:", error);
    res.status(500).json({ error: "Failed to create plan", details: error.message });
  }
}

// Get all plans
export async function getAllPlans(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const userId = req.user.id;
    const isAdmin = req.user.role === "admin";

    // Build where clause
    let where = isAdmin ? {} : { userId };
    if (userId && isAdmin) {
      where = { ...where, userId: parseInt(userId) };
    }
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      //@ts-ignore
      if (isNaN(start) || isNaN(end)) {
        return res.status(400).json({ error: "Invalid date format" });
      }
      where = { ...where, createdAt: { gte: start, lte: end } };
    }

    const plans = await prisma.plans.findMany({
      where,
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json( plans );
  } catch (error) {
    console.error("Error fetching plans:", error);
    res.status(500).json({ error: "Failed to fetch plans", details: error.message });
  }
}

// Get a single plan by ID
export async function getPlanById(req, res) {
  try {
    const { id } = req.params;
    const requesterId = req.user.id;
    const isAdmin = req.user.role === "admin";

    const plan = await prisma.plans.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
    });

    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    // Check if user is authorized to view this plan
    if (!isAdmin && plan.userId !== requesterId) {
      return res.status(403).json({ error: "Unauthorized access to this plan" });
    }

    res.status(200).json( plan );
  } catch (error) {
    console.error("Error fetching plan:", error);
    res.status(500).json({ error: "Failed to fetch plan", details: error.message });
  }
}

// Update a plan
export async function updatePlan(req, res) {
  try {
    const { id } = req.params;
    const { plan } = req.body;
    const requesterId = req.user.id;

    // Check if plan exists
    const existingPlan = await prisma.plans.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    // Validate plan value
    const validPlans = ["free", "premium", "enterprise"];
    if (!plan || !validPlans.includes(plan.toLowerCase())) {
      return res.status(400).json({ error: `Invalid plan. Must be one of: ${validPlans.join(", ")}` });
    }

    const updatedPlan = await prisma.plans.update({
      where: { id: parseInt(id) },
      data: {
        plan: plan.toLowerCase(),
      },
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
      },
    });

    res.status(200).json({ message: "Plan updated successfully", data: updatedPlan });
  } catch (error) {
    console.error("Error updating plan:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.status(500).json({ error: "Failed to update plan", details: error.message });
  }
}

// Delete a plan
export async function deletePlan(req, res) {
  try {
    const { id } = req.params;
    const requesterId = req.user.id;

    // Check if plan exists
    const plan = await prisma.plans.findUnique({
      where: { id: parseInt(id) },
    });

    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    await prisma.plans.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).json({ message: "Plan deleted successfully" });
  } catch (error) {
    console.error("Error deleting plan:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.status(500).json({ error: "Failed to delete plan", details: error.message });
  }
}

// Get plan summary (e.g., count by plan type)
export async function getPlanSummary(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const requesterId = req.user.id;
    const isAdmin = req.user.role === "admin";

    // Validate date parameters
    let where = isAdmin ? {} : { userId: requesterId };
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      //@ts-ignore
      if (isNaN(start) || isNaN(end)) {
        return res.status(400).json({ error: "Invalid date format" });
      }
      where = { ...where, createdAt: { gte: start, lte: end } };
    }

    // Group plans by type
    const planCounts = await prisma.plans.groupBy({
      by: ["plan"],
      where,
      _count: { plan: true },
    });

    const summary = planCounts.map((item) => ({
      plan: item.plan,
      count: item._count.plan,
    }));

    // Total plans
    const totalPlans = summary.reduce((sum, item) => sum + item.count, 0);

    // Graph data for visualization
    const graphData = {
      planDistribution: {
        labels: summary.map((item) => item.plan),
        datasets: [
          {
            label: "Plan Count",
            data: summary.map((item) => item.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };

    res.status(200).json({
      message: "Plan summary retrieved successfully",
      data: {
        totalPlans,
        summary,
        graphData,
      },
    });
  } catch (error) {
    console.error("Error fetching plan summary:", error);
    res.status(500).json({ error: "Failed to fetch plan summary", details: error.message });
  }
}
