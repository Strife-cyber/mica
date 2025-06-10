import prisma from "../config/prisma-client.js";
import { authorize } from "./auth.controller.js";

const validateNumeric = (value, fieldName) => {
    if (value === undefined || value === null) return true; // Allow null as per schema
    const num = Number(value);
    if (isNaN(num) || num < 0) {
        throw new Error(`Invalid ${fieldName}: must be a non-negative number`);
    }
    return true;
};

export const createInventory = async (req, res) => {
    try {
        const { name, description, quantity_in_stock, cost_price, selling_price, supplier_id } = req.body;
        const { id: user_id } = req.user;

        if (!name && !description && !quantity_in_stock && !cost_price && !selling_price && !supplier_id) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        // Validate numeric fields
        validateNumeric(quantity_in_stock, "quantity_in_stock");
        validateNumeric(cost_price, "cost_price");
        validateNumeric(selling_price, "selling_price");

        // Check for duplicate name
        if (name) {
            const existingItem = await prisma.inventory.findFirst({
                where: {
                    name: { contains: name },
                    user_id,
                },
            });
            if (existingItem) {
                return res.status(400).json({ message: "An inventory item with this name already exists for this user" });
            }
        }

        // Validate supplier_id if provided
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

        const newInventory = await prisma.inventory.create({
            data: {
                name,
                description,
                quantity_in_stock: quantity_in_stock ? parseInt(quantity_in_stock) : null,
                cost_price: cost_price ? parseFloat(cost_price) : null,
                selling_price: selling_price ? parseFloat(selling_price) : null,
                supplier_id: supplier_id ? parseInt(supplier_id) : null,
                user_id,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });

        res.status(201).json({ message: "Inventory item created successfully", inventory: newInventory });
    } catch (error) {
        res.status(500).json({ message: "Error creating inventory item", error: error.message });
    }
};

export const getAllInventory = async (req, res) => {
    try {
        const { name, description } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id, // Admins see all inventory
            ...(name && { name: { contains: String(name), mode: 'insensitive' } }),
            ...(description && { description: { contains: String(description), mode: 'insensitive' } }),
        };

        const inventory = await prisma.inventory.findMany({
            // @ts-ignore
            where: filters,
            orderBy: { created_at: "desc" },
            include: { suppliers: true },
        });

        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving inventory", error: error.message });
    }
};

export const getInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const inventoryId = parseInt(id);
        if (isNaN(inventoryId)) {
            return res.status(400).json({ message: "Invalid inventory ID" });
        }

        const inventory = await prisma.inventory.findUnique({
            where: { id: inventoryId },
            include: {
                suppliers: true,
                inventory_transactions: true,
                purchase_items: true,
                sales_items: true,
            },
        });

        if (!inventory) {
            return res.status(404).json({ message: "Inventory item not found" });
        }

        if (role !== 'admin' && inventory.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this inventory item" });
        }

        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving inventory item", error: error.message });
    }
};

export const updateInventory = [authorize(['admin', 'user']), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, quantity_in_stock, cost_price, selling_price, supplier_id } = req.body;
        const { id: user_id, role } = req.user;

        const inventoryId = parseInt(id);
        if (isNaN(inventoryId)) {
            return res.status(400).json({ message: "Invalid inventory ID" });
        }

        // Validate numeric fields
        validateNumeric(quantity_in_stock, "quantity_in_stock");
        validateNumeric(cost_price, "cost_price");
        validateNumeric(selling_price, "selling_price");

        const existingInventory = await prisma.inventory.findUnique({
            where: { id: inventoryId },
        });

        if (!existingInventory) {
            return res.status(404).json({ message: "Inventory item not found" });
        }

        if (role !== 'admin' && existingInventory.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this inventory item" });
        }

        // Check for duplicate name
        if (name) {
            const duplicateItem = await prisma.inventory.findFirst({
                where: {
                    name: { contains: name },
                    user_id,
                    NOT: { id: inventoryId },
                },
            });
            if (duplicateItem) {
                return res.status(400).json({ message: "An inventory item with this name already exists for this user" });
            }
        }

        // Validate supplier_id if provided
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

        const updatedInventory = await prisma.inventory.update({
            where: { id: inventoryId },
            data: {
                name,
                description,
                quantity_in_stock: quantity_in_stock ? parseInt(quantity_in_stock) : null,
                cost_price: cost_price ? parseFloat(cost_price) : null,
                selling_price: selling_price ? parseFloat(selling_price) : null,
                supplier_id: supplier_id ? parseInt(supplier_id) : null,
                updated_at: new Date(),
            },
        });

        res.status(200).json({ message: "Inventory item updated successfully", inventory: updatedInventory });
    } catch (error) {
        res.status(500).json({ message: "Error updating inventory item", error: error.message });
    }
}];

export const deleteInventory = [authorize(['admin']), async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const inventoryId = parseInt(id);
        if (isNaN(inventoryId)) {
            return res.status(400).json({ message: "Invalid inventory ID" });
        }

        const existingInventory = await prisma.inventory.findUnique({
            where: { id: inventoryId },
        });

        if (!existingInventory) {
            return res.status(404).json({ message: "Inventory item not found" });
        }

        if (role !== 'admin' && existingInventory.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this inventory item" });
        }

        await prisma.inventory.delete({
            where: { id: inventoryId },
        });

        res.status(200).json({ message: "Inventory item deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete inventory item with associated transactions, purchases, or sales" });
        }
        res.status(500).json({ message: "Error deleting inventory item", error: error.message });
    }
}];