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

export const createSale = async (req, res) => {
    try {
        const { customer_id, sale_date, total_amount } = req.body;
        const { id: user_id } = req.user;

        if (!customer_id && !sale_date && !total_amount) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        // Validate total_amount
        const totalAmountValidation = validateNumeric(total_amount, "total_amount");
        if (totalAmountValidation != true) {
            return res.status(400).json({ message: totalAmountValidation.error });
        }

        // Validate customer_id
        if (customer_id) {
            const customer = await prisma.customers.findUnique({
                where: { id: parseInt(customer_id) },
            });
            if (!customer) {
                return res.status(400).json({ message: "Customer not found" });
            }
            if (customer.user_id !== user_id) {
                return res.status(403).json({ message: "Customer does not belong to this user" });
            }
        }

        const newSale = await prisma.sales.create({
            data: {
                customer_id: customer_id ? parseInt(customer_id) : null,
                sale_date: sale_date ? new Date(sale_date) : null,
                total_amount: total_amount ? parseFloat(total_amount) : null,
                user_id,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });

        res.status(201).json( newSale );
    } catch (error) {
        res.status(500).json({ message: "Error creating sale", error: error.message });
    }
};

export const getAllSales = async (req, res) => {
    try {
        const { customer_id } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id,
            ...(customer_id && { customer_id: parseInt(customer_id) }),
        };

        const sales = await prisma.sales.findMany({
            where: filters,
            orderBy: { created_at: "desc" },
            include: { customers: true, sales_items: true },
        });

        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving sales", error: error.message });
    }
};

export const getSaleById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const saleId = parseInt(id);
        if (isNaN(saleId)) {
            return res.status(400).json({ message: "Invalid sale ID" });
        }

        const sale = await prisma.sales.findUnique({
            where: { id: saleId },
            include: { customers: true, sales_items: { include: { inventory: true } } },
        });

        if (!sale) {
            return res.status(404).json({ message: "Sale not found" });
        }

        if (role !== 'admin' && sale.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this sale" });
        }

        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving sale", error: error.message });
    }
};

export const updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const { customer_id, sale_date, total_amount } = req.body;
        const { id: user_id, role } = req.user;

        const saleId = parseInt(id);
        if (isNaN(saleId)) {
            return res.status(400).json({ message: "Invalid sale ID" });
        }

        const existingSale = await prisma.sales.findUnique({
            where: { id: saleId },
        });

        if (!existingSale) {
            return res.status(404).json({ message: "Sale not found" });
        }

        if (role !== 'admin' && existingSale.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this sale" });
        }

        // Validate total_amount
        const totalAmountValidation = validateNumeric(total_amount, "total_amount");
        if (totalAmountValidation != true) {
            return res.status(400).json({ message: totalAmountValidation.error });
        }

        // Validate customer_id
        if (customer_id) {
            const customer = await prisma.customers.findUnique({
                where: { id: parseInt(customer_id) },
            });
            if (!customer) {
                return res.status(400).json({ message: "Customer not found" });
            }
            if (customer.user_id !== user_id) {
                return res.status(403).json({ message: "Customer does not belong to this user" });
            }
        }

        const updatedSale = await prisma.sales.update({
            where: { id: saleId },
            data: {
                customer_id: customer_id ? parseInt(customer_id) : null,
                sale_date: sale_date ? new Date(sale_date) : null,
                total_amount: total_amount ? parseFloat(total_amount) : null,
                updated_at: new Date(),
            },
        });

        res.status(200).json({ message: "Sale updated successfully", sale: updatedSale });
    } catch (error) {
        res.status(500).json({ message: "Error updating sale", error: error.message });
    }
};

export const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;

        const saleId = parseInt(id);
        if (isNaN(saleId)) {
            return res.status(400).json({ message: "Invalid sale ID" });
        }

        const existingSale = await prisma.sales.findUnique({
            where: { id: saleId },
        });

        if (!existingSale) {
            return res.status(404).json({ message: "Sale not found" });
        }

        await prisma.sales.delete({
            where: { id: saleId },
        });

        res.status(200).json({ message: "Sale deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete sale with associated sale items" });
        }
        res.status(500).json({ message: "Error deleting sale", error: error.message });
    }
};