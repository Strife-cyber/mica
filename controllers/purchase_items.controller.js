import { Decimal } from "@prisma/client/runtime/library.js";
import prisma from "../config/prisma-client.js";
import { authorize } from "./auth.controller.js";

const validateNumeric = (value, fieldName) => {
    if (value === undefined || value === null) return true;
    const num = Number(value);
    if (isNaN(num) || num < 0) {
        return { error: `Invalid ${fieldName}: must be a non-negative number` };
    }
    return true;
};

export const createPurchaseItem = async (req, res) => {
    try {
        const { purchase_id, inventory_id, quantity, unit_price, name } = req.body;
        const { id: user_id } = req.user;

        if (!purchase_id || (!inventory_id && !name) || !quantity || !unit_price) {
            return res.status(400).json({ message: "purchase_id, quantity, unit_price, and either inventory_id or name are required" });
        }

        // Validate numeric fields
        const quantityValidation = validateNumeric(quantity, "quantity");
        if (quantityValidation != true) {
            return res.status(400).json({ message: quantityValidation.error });
        }
        const unitPriceValidation = validateNumeric(unit_price, "unit_price");
        if (unitPriceValidation != true) {
            return res.status(400).json({ message: unitPriceValidation.error });
        }

        // Validate purchase_id
        const purchase = await prisma.purchases.findUnique({
            where: { id: parseInt(purchase_id) },
        });
        if (!purchase) {
            return res.status(400).json({ message: "Purchase not found" });
        }
        if (purchase.user_id !== user_id) {
            return res.status(403).json({ message: "Purchase does not belong to this user" });
        }

        let inventoryItem;
        if (inventory_id) {
            // Validate inventory_id
            inventoryItem = await prisma.inventory.findUnique({
                where: { id: parseInt(inventory_id) },
            });
            if (!inventoryItem) {
                return res.status(400).json({ message: "Inventory item not found" });
            }
            if (inventoryItem.user_id !== user_id) {
                return res.status(403).json({ message: "Inventory item does not belong to this user" });
            }
        } else {
            // Create new inventory item if name is provided
            const existingInventory = await prisma.inventory.findFirst({
                where: {
                    name: { contains: name },
                    user_id,
                },
            });
            if (existingInventory) {
                return res.status(400).json({ message: "An inventory item with this name already exists for this user" });
            }

            inventoryItem = await prisma.inventory.create({
                data: {
                    name,
                    cost_price: parseFloat(unit_price),
                    user_id,
                    quantity_in_stock: 0,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });
        }

        // Calculate total_price
        const total_price = parseInt(quantity) * parseFloat(unit_price);

        // Create purchase item and update inventory in a transaction
        const result = await prisma.$transaction(async (tx) => {
            const newPurchaseItem = await tx.purchase_items.create({
                data: {
                    purchase_id: parseInt(purchase_id),
                    inventory_id: inventoryItem.id,
                    quantity: parseInt(quantity),
                    unit_price: parseFloat(unit_price),
                    total_price,
                    user_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            // Update inventory quantity
            await tx.inventory.update({
                where: { id: inventoryItem.id },
                data: {
                    quantity_in_stock: {
                        increment: parseInt(quantity),
                    },
                    updated_at: new Date(),
                },
            });

            // Create inventory transaction
            await tx.inventory_transactions.create({
                data: {
                    inventory_id: inventoryItem.id,
                    transaction_type: "PURCHASE",
                    quantity_change: parseInt(quantity),
                    date: new Date(),
                    reference_type: "purchase",
                    reference_id: parseInt(purchase_id),
                    user_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            // Update purchase total_amount
            const purchaseItems = await tx.purchase_items.findMany({
                where: { purchase_id: parseInt(purchase_id) },
            });
            const newTotalAmount = purchaseItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0), 0);

            await tx.purchases.update({
                where: { id: parseInt(purchase_id) },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });

            return newPurchaseItem;
        });

        res.status(201).json({ message: "Purchase item created successfully", purchase_item: result });
    } catch (error) {
        res.status(500).json({ message: "Error creating purchase item", error: error.message });
    }
};

export const getAllPurchaseItems = async (req, res) => {
    try {
        const { purchase_id, inventory_id } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id,
            ...(purchase_id && { purchase_id: parseInt(purchase_id) }),
            ...(inventory_id && { inventory_id: parseInt(inventory_id) }),
        };

        const purchaseItems = await prisma.purchase_items.findMany({
            where: filters,
            orderBy: { created_at: "desc" },
            include: { purchases: true, inventory: true },
        });

        res.status(200).json(purchaseItems);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving purchase items", error: error.message });
    }
};

export const getPurchaseItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const purchaseItemId = parseInt(id);
        if (isNaN(purchaseItemId)) {
            return res.status(400).json({ message: "Invalid purchase item ID" });
        }

        const purchaseItem = await prisma.purchase_items.findUnique({
            where: { id: purchaseItemId },
            include: { purchases: true, inventory: true },
        });

        if (!purchaseItem) {
            return res.status(404).json({ message: "Purchase item not found" });
        }

        if (role !== 'admin' && purchaseItem.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this purchase item" });
        }

        res.status(200).json(purchaseItem);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving purchase item", error: error.message });
    }
};

export const updatePurchaseItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { purchase_id, inventory_id, quantity, unit_price } = req.body;
        const { id: user_id, role } = req.user;

        const purchaseItemId = parseInt(id);
        if (isNaN(purchaseItemId)) {
            return res.status(400).json({ message: "Invalid purchase item ID" });
        }

        const existingPurchaseItem = await prisma.purchase_items.findUnique({
            where: { id: purchaseItemId },
        });

        if (!existingPurchaseItem) {
            return res.status(404).json({ message: "Purchase item not found" });
        }

        if (role !== 'admin' && existingPurchaseItem.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this purchase item" });
        }

        // Validate numeric fields
        const quantityValidation = validateNumeric(quantity, "quantity");
        if (quantityValidation != true) {
            return res.status(400).json({ message: quantityValidation.error });
        }
        const unitPriceValidation = validateNumeric(unit_price, "unit_price");
        if (unitPriceValidation != true) {
            return res.status(400).json({ message: unitPriceValidation.error });
        }

        // Validate purchase_id
        if (purchase_id) {
            const purchase = await prisma.purchases.findUnique({
                where: { id: parseInt(purchase_id) },
            });
            if (!purchase) {
                return res.status(400).json({ message: "Purchase not found" });
            }
            if (purchase.user_id !== user_id) {
                return res.status(403).json({ message: "Purchase does not belong to this user" });
            }
        }

        // Validate inventory_id
        if (inventory_id) {
            const inventory = await prisma.inventory.findUnique({
                where: { id: parseInt(inventory_id) },
            });
            if (!inventory) {
                return res.status(400).json({ message: "Inventory item not found" });
            }
            if (inventory.user_id !== user_id) {
                return res.status(403).json({ message: "Inventory item does not belong to this user" });
            }
        }

        // Calculate total_price
        const total_price = quantity && unit_price ? parseInt(quantity) * parseFloat(unit_price) : existingPurchaseItem.total_price;

        // Update purchase item and related records in a transaction
        const result = await prisma.$transaction(async (tx) => {
            // Update purchase item
            const updatedPurchaseItem = await tx.purchase_items.update({
                where: { id: purchaseItemId },
                data: {
                    purchase_id: purchase_id ? parseInt(purchase_id) : existingPurchaseItem.purchase_id,
                    inventory_id: inventory_id ? parseInt(inventory_id) : existingPurchaseItem.inventory_id,
                    quantity: quantity ? parseInt(quantity) : existingPurchaseItem.quantity,
                    unit_price: unit_price ? parseFloat(unit_price) : existingPurchaseItem.unit_price,
                    total_price,
                    updated_at: new Date(),
                },
            });

            // Adjust inventory quantity (reverse old quantity, apply new)
            const quantityChange = (quantity ? parseInt(quantity) : existingPurchaseItem.quantity) - existingPurchaseItem.quantity;
            if (quantityChange !== 0) {
                await tx.inventory.update({
                    where: { id: updatedPurchaseItem.inventory_id },
                    data: {
                        quantity_in_stock: {
                            increment: quantityChange,
                        },
                        updated_at: new Date(),
                    },
                });

                // Create inventory transaction for quantity change
                await tx.inventory_transactions.create({
                    data: {
                        inventory_id: updatedPurchaseItem.inventory_id,
                        transaction_type: "PURCHASE_ADJUSTMENT",
                        quantity_change: quantityChange,
                        date: new Date(),
                        reference_type: "purchase_item",
                        reference_id: purchaseItemId,
                        user_id,
                        created_at: new Date(),
                        updated_at: new Date(),
                    },
                });
            }

            // Update purchase total_amount
            const purchaseItems = await tx.purchase_items.findMany({
                where: { purchase_id: updatedPurchaseItem.purchase_id },
            });
            const newTotalAmount = purchaseItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0), 0);

            await tx.purchases.update({
                where: { id: updatedPurchaseItem.purchase_id },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });

            return updatedPurchaseItem;
        });

        res.status(200).json({ message: "Purchase item updated successfully", purchase_item: result });
    } catch (error) {
        res.status(500).json({ message: "Error updating purchase item", error: error.message });
    }
};

export const deletePurchaseItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id } = req.user;

        const purchaseItemId = parseInt(id);
        if (isNaN(purchaseItemId)) {
            return res.status(400).json({ message: "Invalid purchase item ID" });
        }

        const existingPurchaseItem = await prisma.purchase_items.findUnique({
            where: { id: purchaseItemId },
        });

        if (!existingPurchaseItem) {
            return res.status(404).json({ message: "Purchase item not found" });
        }

        // Delete purchase item and adjust inventory in a transaction
        await prisma.$transaction(async (tx) => {
            await tx.purchase_items.delete({
                where: { id: purchaseItemId },
            });

            // Reverse inventory quantity
            await tx.inventory.update({
                where: { id: existingPurchaseItem.inventory_id },
                data: {
                    quantity_in_stock: {
                        decrement: existingPurchaseItem.quantity,
                    },
                    updated_at: new Date(),
                },
            });

            // Create inventory transaction for reversal
            await tx.inventory_transactions.create({
                data: {
                    inventory_id: existingPurchaseItem.inventory_id,
                    transaction_type: "PURCHASE_REVERSAL",
                    quantity_change: -existingPurchaseItem.quantity,
                    date: new Date(),
                    reference_type: "purchase_item",
                    reference_id: purchaseItemId,
                    user_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            // Update purchase total_amount
            const purchaseItems = await tx.purchase_items.findMany({
                where: { purchase_id: existingPurchaseItem.purchase_id },
            });
            const newTotalAmount = purchaseItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0 ), 0);

            await tx.purchases.update({
                where: { id: existingPurchaseItem.purchase_id },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });
        });

        res.status(200).json({ message: "Purchase item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting purchase item", error: error.message });
    }
};