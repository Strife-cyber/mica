import prisma from "../config/prisma-client.js";
import { authorize } from "./auth.controller.js";

const validateContactInfo = (contactInfo) => {
    if (!contactInfo) return true; // Allow null as per schema
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{7,15}$/;
    return emailRegex.test(contactInfo) || phoneRegex.test(contactInfo);
};

export const createSupplier = async (req, res) => {
    try {
        const { name, contact_info } = req.body;
        const { id: user_id } = req.user;

        if (!name && !contact_info) {
            return res.status(400).json({ message: "At least one field (name or contact_info) is required" });
        }

        if (contact_info && !validateContactInfo(contact_info)) {
            return res.status(400).json({ message: "Invalid contact_info format (must be email or phone)" });
        }

        const existingSupplier = await prisma.suppliers.findFirst({
            where: {
                contact_info: contact_info || null,
                user_id,
            },
        });

        if (existingSupplier) {
            return res.status(400).json({ message: "Supplier with this contact_info already exists for this user" });
        }

        const newSupplier = await prisma.suppliers.create({
            data: {
                name,
                contact_info,
                user_id,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });

        res.status(201).json({ message: "Supplier created successfully", supplier: newSupplier });
    } catch (error) {
        res.status(500).json({ message: "Error creating supplier", error: error.message });
    }
};

export const getAllSuppliers = async (req, res) => {
    try {
        const { name, contact_info } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id, // Admins see all suppliers
            ...(name && { name: { contains: String(name), mode: 'insensitive' } }),
            ...(contact_info && { contact_info: { contains: String(contact_info), mode: 'insensitive' } }),
        };

        const suppliers = await prisma.suppliers.findMany({
            // @ts-ignore
            where: filters,
            orderBy: { created_at: "desc" },
        });

        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving suppliers", error: error.message });
    }
};

export const getSupplierById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const supplierId = parseInt(id);
        if (isNaN(supplierId)) {
            return res.status(400).json({ message: "Invalid supplier ID" });
        }

        const supplier = await prisma.suppliers.findUnique({
            where: { id: supplierId },
            include: { inventory: true, purchases: true },
        });

        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        if (role !== 'admin' && supplier.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this supplier" });
        }

        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving supplier", error: error.message });
    }
};

export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, contact_info } = req.body;
        const { id: user_id, role } = req.user;

        const supplierId = parseInt(id);
        if (isNaN(supplierId)) {
            return res.status(400).json({ message: "Invalid supplier ID" });
        }

        if (contact_info && !validateContactInfo(contact_info)) {
            return res.status(400).json({ message: "Invalid contact_info format (must be email or phone)" });
        }

        const existingSupplier = await prisma.suppliers.findUnique({
            where: { id: supplierId },
        });

        if (!existingSupplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        if (role !== 'admin' && existingSupplier.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this supplier" });
        }

        if (contact_info) {
            const duplicateCheck = await prisma.suppliers.findFirst({
                where: {
                    contact_info,
                    user_id,
                    NOT: { id: supplierId },
                },
            });

            if (duplicateCheck) {
                return res.status(400).json({ message: "Contact_info already in use by another supplier for this user" });
            }
        }

        const updatedSupplier = await prisma.suppliers.update({
            where: { id: supplierId },
            data: {
                name,
                contact_info,
                updated_at: new Date(),
            },
        });

        res.status(200).json({ message: "Supplier updated successfully", supplier: updatedSupplier });
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "Contact_info already in use" });
        }
        res.status(500).json({ message: "Error updating supplier", error: error.message });
    }
};

export const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const supplierId = parseInt(id);
        if (isNaN(supplierId)) {
            return res.status(400).json({ message: "Invalid supplier ID" });
        }

        const existingSupplier = await prisma.suppliers.findUnique({
            where: { id: supplierId },
        });

        if (!existingSupplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        if (role !== 'admin' && existingSupplier.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this supplier" });
        }

        await prisma.suppliers.delete({
            where: { id: supplierId },
        });

        res.status(200).json({ message: "Supplier deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete supplier with associated inventory or purchases" });
        }
        res.status(500).json({ message: "Error deleting supplier", error: error.message });
    }
};
