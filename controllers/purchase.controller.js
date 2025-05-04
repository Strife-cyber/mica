import prisma from "../config/prisma-client.js";

const validateNumeric = (value, fieldName) => {
    if (value === undefined || value === null) return true;
    const num = Number(value);
    if (isNaN(num) || num < 0) {
        return { error: `Invalid ${fieldName}: must be a non-negative number` };
    }
    return true;
};

export const createPurchase = async (req, res) => {
    try {
        const { supplier_id, purchase_date, total_amount } = req.body;
        const { id: user_id } = req.user;

        if (!supplier_id && !purchase_date && !total_amount) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        // Validate total_amount
        const totalAmountValidation = validateNumeric(total_amount, "total_amount");
        if (totalAmountValidation != true) {
            return res.status(400).json({ message: totalAmountValidation.error });
        }

        // Validate supplier_id
        if (supplier_id) {
            const supplier = await prisma.suppliers.findUnique({
                where: { id: parseInt(supplier_id) },
            });
            if (!supplier) {
                return res.status(400).json({ message: "Supplier not found" });
            }
            if (supplier.user_id !== user_id) {
                return res.status(403).json({ message: "Supplier does not belong to this user" });
            }
        }

        const newPurchase = await prisma.purchases.create({
            data: {
                supplier_id: supplier_id ? parseInt(supplier_id) : null,
                purchase_date: purchase_date ? new Date(purchase_date) : null,
                total_amount: total_amount ? parseFloat(total_amount) : null,
                user_id,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });

        res.status(201).json({ message: "Purchase created successfully", purchase: newPurchase });
    } catch (error) {
        res.status(500).json({ message: "Error creating purchase", error: error.message });
    }
};

export const getAllPurchases = async (req, res) => {
    try {
        const { supplier_id } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id,
            ...(supplier_id && { supplier_id: parseInt(supplier_id) }),
        };

        const purchases = await prisma.purchases.findMany({
            where: filters,
            orderBy: { created_at: "desc" },
            include: { suppliers: true, purchase_items: true },
        });

        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving purchases", error: error.message });
    }
};

export const getPurchaseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const purchaseId = parseInt(id);
        if (isNaN(purchaseId)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const purchase = await prisma.purchases.findUnique({
            where: { id: purchaseId },
            include: { suppliers: true, purchase_items: { include: { inventory: true } } },
        });

        if (!purchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        if (role !== 'admin' && purchase.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this purchase" });
        }

        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving purchase", error: error.message });
    }
};

export const updatePurchase = async (req, res) => {
    try {
        const { id } = req.params;
        const { supplier_id, purchase_date, total_amount } = req.body;
        const { id: user_id, role } = req.user;

        const purchaseId = parseInt(id);
        if (isNaN(purchaseId)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const existingPurchase = await prisma.purchases.findUnique({
            where: { id: purchaseId },
        });

        if (!existingPurchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        if (role !== 'admin' && existingPurchase.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this purchase" });
        }

        // Validate total_amount
        const totalAmountValidation = validateNumeric(total_amount, "total_amount");
        if (totalAmountValidation != true) {
            return res.status(400).json({ message: totalAmountValidation.error });
        }

        // Validate supplier_id
        if (supplier_id) {
            const supplier = await prisma.suppliers.findUnique({
                where: { id: parseInt(supplier_id) },
            });
            if (!supplier) {
                return res.status(400).json({ message: "Supplier not found" });
            }
            if (supplier.user_id !== user_id) {
                return res.status(403).json({ message: "Supplier does not belong to this user" });
            }
        }

        const updatedPurchase = await prisma.purchases.update({
            where: { id: purchaseId },
            data: {
                supplier_id: supplier_id ? parseInt(supplier_id) : null,
                purchase_date: purchase_date ? new Date(purchase_date) : null,
                total_amount: total_amount ? parseFloat(total_amount) : null,
                updated_at: new Date(),
            },
        });

        res.status(200).json({ message: "Purchase updated successfully", purchase: updatedPurchase });
    } catch (error) {
        res.status(500).json({ message: "Error updating purchase", error: error.message });
    }
};

export const deletePurchase = async (req, res) => {
    try {
        const { id } = req.params;

        const purchaseId = parseInt(id);
        if (isNaN(purchaseId)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const existingPurchase = await prisma.purchases.findUnique({
            where: { id: purchaseId },
        });

        if (!existingPurchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        await prisma.purchases.delete({
            where: { id: purchaseId },
        });

        res.status(200).json({ message: "Purchase deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete purchase with associated purchase items" });
        }
        res.status(500).json({ message: "Error deleting purchase", error: error.message });
    }
};