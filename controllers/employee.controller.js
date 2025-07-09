import prisma from "../config/prisma-client.js";

export const createEmployee = async (req, res) => {
    try {
        const { id } = req.user;
        const { businessId } = req.body;

        const existingUser = await prisma.users.findFirst({
            where: { id: parseInt(id) }
        });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        existingUser.role = 'employee';
        await prisma.users.update({
            where: { id: parseInt(id) },
            data: existingUser
        });

        const newEmployee = await prisma.employees.create({
            data: {
                userId: id,
                businessId: businessId
            }
        });

        res.status(201).json({ message: "Employee added successfullly", employee: newEmployee })
    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error: error.message });
    }
}

export const getAllEmployees = async (req, res) => {
    try {
        const { id, role } = req.user;

        const existingUser = await prisma.users.findFirst({
            where: { id: parseInt(id) }
        });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (role === 'employee') {
            return res.status(404).json({ message: "You do not have sufficient rights to view this" })
        }

        const business = await prisma.business.findFirst({
            where: {
                userId: parseInt(id)
            }
        });

        const employees = await prisma.employees.findMany({
            where: {
                businessId: business.id
            }
        });

        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Failed to fetch employees", details: error.message });   
    }
}

export const getEmployeeByBusinessId = async (req, res) => {
    try {
        const { id } = req.user;
        const { businessId } = req.params;

        const existingUser = await prisma.users.findFirst({
            where: { id: parseInt(id) }
        });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const employee = await prisma.employees.findFirst({
            where: {
                userId: parseInt(id),
                businessId: parseInt(businessId)
            }
        });

        res.status(200).json(employee);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Failed to fetch employee", details: error.message });   
    }
}

export const updateEmployeeRights = async (req, res) => {
    try {
        const { id } = req.params;
        const { permissions } = req.body;
        const { role } = req.user;

        if (role === 'employee') {
            return res.status(404).json({ message: "you do not have necessary permission to access this resource" });
        }

        const existingEmployee = await prisma.employees.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        const updatedEmployee = await prisma.employees.update({
            where: { id: parseInt(id) },
            data: {
                permissions
            }
        });

        res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee })
    } catch (error) {
        res.status(500).json({ message: "Error updating employee", error: error.message });
    }
}

export const deleteEmployeeBanningAccess = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.user;

        const employeeId = parseInt(id);
        if (isNaN(employeeId)) {
            return res.status(400).json({ message: "Invalid Employee ID" });
        }

        const existingEmployee = await prisma.employees.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingEmployee) {
            return res.status(404).json({ message: "Customer not found" });
        }

        if (role === 'employee') {
            return res.status(403).json({ message: "Unauthorized access to this employee" });
        }

        await prisma.employees.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ message: "Cannot delete employee" });
        }
        res.status(500).json({ message: "Error deleting employee", error: error.message });
    }
}
