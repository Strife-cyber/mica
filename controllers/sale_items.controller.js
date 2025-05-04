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

export const createSaleItem = async (req, res) => {
    try {
        const { sale_id, inventory_id, quantity, unit_price } = req.body;
        const { id: user_id } = req.user;

        if (!sale_id || !inventory_id || !quantity || !unit_price) {
            return res.status(400).json({ message: "sale_id, inventory_id, quantity, and unit_price are required" });
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

        // Validate sale_id
        const sale = await prisma.sales.findUnique({
            where: { id: parseInt(sale_id) },
        });
        if (!sale) {
            return res.status(400).json({ message: "Sale not found" });
        }
        if (sale.user_id !== user_id) {
            return res.status(403).json({ message: "Sale does not belong to this user" });
        }

        // Validate inventory_id and stock
        const inventoryItem = await prisma.inventory.findUnique({
            where: { id: parseInt(inventory_id) },
        });
        if (!inventoryItem) {
            return res.status(400).json({ message: "Inventory item not found" });
        }
        if (inventoryItem.user_id !== user_id) {
            return res.status(403).json({ message: "Inventory item does not belong to this user" });
        }
        if (inventoryItem.quantity_in_stock < parseInt(quantity)) {
            return res.status(400).json({ message: "Insufficient stock for this item" });
        }

        // Calculate total_price
        const total_price = parseInt(quantity) * parseFloat(unit_price);

        // Create sale item and update inventory in a transaction
        const result = await prisma.$transaction(async (tx) => {
            const newSaleItem = await tx.sales_items.create({
                data: {
                    sale_id: parseInt(sale_id),
                    inventory_id: parseInt(inventory_id),
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
                where: { id: parseInt(inventory_id) },
                data: {
                    quantity_in_stock: {
                        decrement: parseInt(quantity),
                    },
                    updated_at: new Date(),
                },
            });

            // Create inventory transaction
            await tx.inventory_transactions.create({
                data: {
                    inventory_id: parseInt(inventory_id),
                    transaction_type: "SALE",
                    quantity_change: -parseInt(quantity),
                    date: new Date(),
                    reference_type: "sale",
                    reference_id: parseInt(sale_id),
                    user_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            // Update sale total_amount
            const saleItems = await tx.sales_items.findMany({
                where: { sale_id: parseInt(sale_id) },
            });
            const newTotalAmount = saleItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0), 0);

            await tx.sales.update({
                where: { id: parseInt(sale_id) },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });

            return newSaleItem;
        });

        res.status(201).json({ message: "Sale item created successfully", sale_item: result });
    } catch (error) {
        res.status(500).json({ message: "Error creating sale item", error: error.message });
    }
}

export const getAllSaleItems = async (req, res) => {
    try {
        const { sale_id, inventory_id } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id,
            ...(sale_id && { sale_id: parseInt(sale_id) }),
            ...(inventory_id && { inventory_id: parseInt(inventory_id) }),
        };

        const saleItems = await prisma.sales_items.findMany({
            where: filters,
            orderBy: { created_at: "desc" },
            include: { sales: true, inventory: true },
        });

        res.status(200).json(saleItems);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving sale items", error: error.message });
    }
};

export const getSaleItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const saleItemId = parseInt(id);
        if (isNaN(saleItemId)) {
            return res.status(400).json({ message: "Invalid sale item ID" });
        }

        const saleItem = await prisma.sales_items.findUnique({
            where: { id: saleItemId },
            include: { sales: true, inventory: true },
        });

        if (!saleItem) {
            return res.status(404).json({ message: "Sale item not found" });
        }

        if (role !== 'admin' && saleItem.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this sale item" });
        }

        res.status(200).json(saleItem);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving sale item", error: error.message });
    }
};

export const updateSaleItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { sale_id, inventory_id, quantity, unit_price } = req.body;
        const { id: user_id, role } = req.user;

        const saleItemId = parseInt(id);
        if (isNaN(saleItemId)) {
            return res.status(400).json({ message: "Invalid sale item ID" });
        }

        const existingSaleItem = await prisma.sales_items.findUnique({
            where: { id: saleItemId },
        });

        if (!existingSaleItem) {
            return res.status(404).json({ message: "Sale item not found" });
        }

        if (role !== 'admin' && existingSaleItem.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this sale item" });
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

        // Validate sale_id
        if (sale_id) {
            const sale = await prisma.sales.findUnique({
                where: { id: parseInt(sale_id) },
            });
            if (!sale) {
                return res.status(400).json({ message: "Sale not found" });
            }
            if (sale.user_id !== user_id) {
                return res.status(403).json({ message: "Sale does not belong to this user" });
            }
        }

        // Validate inventory_id and stock
        let inventoryId = inventory_id || existingSaleItem.inventory_id;
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

        // Check stock availability
        const newQuantity = quantity ? parseInt(quantity) : existingSaleItem.quantity;
        const inventory = await prisma.inventory.findUnique({
            where: { id: inventoryId },
        });
        const quantityChange = newQuantity - existingSaleItem.quantity;
        if (quantityChange > 0 && inventory.quantity_in_stock < quantityChange) {
            return res.status(400).json({ message: "Insufficient stock for this item" });
        }

        // Calculate total_price
        const total_price = newQuantity * (unit_price ? parseFloat(unit_price) : existingSaleItem.unit_price.toNumber());

        // Update sale item and related records in a transaction
        const result = await prisma.$transaction(async (tx) => {
            // Update sale item
            const updatedSaleItem = await tx.sales_items.update({
                where: { id: saleItemId },
                data: {
                    sale_id: sale_id ? parseInt(sale_id) : existingSaleItem.sale_id,
                    inventory_id: inventory_id ? parseInt(inventory_id) : existingSaleItem.inventory_id,
                    quantity: newQuantity,
                    unit_price: unit_price ? parseFloat(unit_price) : existingSaleItem.unit_price,
                    total_price,
                    updated_at: new Date(),
                },
            });

            // Adjust inventory quantity (reverse old quantity, apply new)
            if (quantityChange !== 0) {
                await tx.inventory.update({
                    where: { id: updatedSaleItem.inventory_id },
                    data: {
                        quantity_in_stock: {
                            decrement: quantityChange,
                        },
                        updated_at: new Date(),
                    },
                });

                // Create inventory transaction for quantity change
                await tx.inventory_transactions.create({
                    data: {
                        inventory_id: updatedSaleItem.inventory_id,
                        transaction_type: "SALE_ADJUSTMENT",
                        quantity_change: -quantityChange,
                        date: new Date(),
                        reference_type: "sale_item",
                        reference_id: saleItemId,
                        user_id,
                        created_at: new Date(),
                        updated_at: new Date(),
                    },
                });
            }

            // Update sale total_amount
            const saleItems = await tx.sales_items.findMany({
                where: { sale_id: updatedSaleItem.sale_id },
            });
            const newTotalAmount = saleItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0), 0);

            await tx.sales.update({
                where: { id: updatedSaleItem.sale_id },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });

            return updatedSaleItem;
        });

        res.status(200).json({ message: "Sale item updated successfully", sale_item: result });
    } catch (error) {
        res.status(500).json({ message: "Error updating sale item", error: error.message });
    }
};

export const deleteSaleItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id } = req.user;

        const saleItemId = parseInt(id);
        if (isNaN(saleItemId)) {
            return res.status(400).json({ message: "Invalid sale item ID" });
        }

        const existingSaleItem = await prisma.sales_items.findUnique({
            where: { id: saleItemId },
        });

        if (!existingSaleItem) {
            return res.status(404).json({ message: "Sale item not found" });
        }

        // Delete sale item and adjust inventory in a transaction
        await prisma.$transaction(async (tx) => {
            await tx.sales_items.delete({
                where: { id: saleItemId },
            });

            // Reverse inventory quantity
            await tx.inventory.update({
                where: { id: existingSaleItem.inventory_id },
                data: {
                    quantity_in_stock: {
                        increment: existingSaleItem.quantity,
                    },
                    updated_at: new Date(),
                },
            });

            // Create inventory transaction for reversal
            await tx.inventory_transactions.create({
                data: {
                    inventory_id: existingSaleItem.inventory_id,
                    transaction_type: "SALE_REVERSAL",
                    quantity_change: existingSaleItem.quantity,
                    date: new Date(),
                    reference_type: "sale_item",
                    reference_id: saleItemId,
                    user_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            // Update sale total_amount
            const saleItems = await tx.sales_items.findMany({
                where: { sale_id: existingSaleItem.sale_id },
            });
            const newTotalAmount = saleItems.reduce((sum, item) => sum + (item.total_price.toNumber() || 0), 0);

            await tx.sales.update({
                where: { id: existingSaleItem.sale_id },
                data: {
                    total_amount: newTotalAmount,
                    updated_at: new Date(),
                },
            });
        });

        res.status(200).json({ message: "Sale item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting sale item", error: error.message });
    }
};