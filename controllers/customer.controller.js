import prisma from "../config/prisma-client.js";

export const createCustomer = async (req, res) => {
    try {
        const { id } = req.user;
        const { name, email, phone, address } = req.body;
        
        if (!name && !email && !phone && !address) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        const existingCustomer = await prisma.customers.findFirst({
            where: {
                OR: [
                    { email: email || null },
                    { phone: phone || null }
                ].filter(condition => condition.email !== null || condition.phone !== null),
                user_id: id
            },
        });

        if (existingCustomer) {
            return res.status(400).json({ message: "Customer with this email or phone already exists" });
        }

        const newCustomer = await prisma.customers.create({
            data: {
                name,
                email,
                phone,
                address,
                user_id: id
            },
        });

        res.status(201).json({ message: "Customer created successfully", customer: newCustomer });
    } catch (error) {
        res.status(500).json({ message: "Error creating customer", error: error.message });
    }
};

export const getAllCustomers = async (req, res) => {
    try {
        const { id, role } = req.user;
        const { name, email, phone, address } = req.query;

        const filters = {
            user_id: role === 'admin' ? undefined : id,
            ...(name && { name: { contains: name, mode: 'insensitive' } }),
            ...(email && { email: { contains: email, mode: 'insensitive' } }),
            ...(phone && { phone: { contains: phone, mode: 'insensitive' } }),
            ...(address && { address: { contains: address, mode: 'insensitive' } }),
        };

        const customers = await prisma.customers.findMany({
            // @ts-ignore
            where: filters,
            orderBy: { created_at: "desc" },
        });

        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customers", error: error.message });
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const customerId = parseInt(id);
        if (isNaN(customerId)) {
            return res.status(400).json({ message: "Invalid customer ID" });
        }

        const customer = await prisma.customers.findUnique({
            where: { id: customerId },
            include: { sales: true },
        });

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        if (role !== 'admin' && customer.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this customer" });
        }

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customer", error: error.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;
        const { name, email, phone, address } = req.body;

        const customerId = parseInt(id);
        if (isNaN(customerId)) {
            return res.status(400).json({ message: "Invalid customer ID" });
        }

        const existingCustomer = await prisma.customers.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        if (role !== 'admin' && existingCustomer.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this customer" });
        }

        if (email || phone) {
            const duplicateCheck = await prisma.customers.findFirst({
                where: {
                    OR: [
                        { email: email || null },
                        { phone: phone || null },
                    ].filter(condition => condition.email !== null || condition.phone !== null),
                    user_id,
                    NOT: { id: customerId },
                },
            });

            if (duplicateCheck) {
                return res.status(400).json({ message: "Email or phone already in use by another customer for this user" });
            }
        }

        const updatedCustomer = await prisma.customers.update({
            where: { id: parseInt(id) },
            data: {
                name,
                email,
                phone,
                address,
                updated_at: new Date(),
            },
        });

        res.status(200).json({ message: "Customer updated successfully", customer: updatedCustomer });
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "Email or phone already in use" });
        }
        res.status(500).json({ message: "Error updating customer", error: error.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const customerId = parseInt(id);
        if (isNaN(customerId)) {
            return res.status(400).json({ message: "Invalid customer ID" });
        }

        const existingCustomer = await prisma.customers.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        if (role !== 'admin' && existingCustomer.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this customer" });
        }

        await prisma.customers.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete customer with associated sales" });
        }
        res.status(500).json({ message: "Error deleting customer", error: error.message });
    }
};