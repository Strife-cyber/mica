import prisma from "../config/prisma-client.js";

export const getAllInventoryTransactions = async (req, res) => {
    try {
        const { inventory_id, transaction_type, reference_type, reference_id } = req.query;
        const { id: user_id, role } = req.user;

        const filters = {
            user_id: role === 'admin' ? undefined : user_id,
            ...(inventory_id && { inventory_id: parseInt(inventory_id) }),
            ...(transaction_type && { transaction_type }),
            ...(reference_type && { reference_type }),
            ...(reference_id && { reference_id: parseInt(reference_id) }),
        };

        const transactions = await prisma.inventory_transactions.findMany({
            where: filters,
            orderBy: { created_at: "desc" },
            include: { inventory: true },
        });

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving inventory transactions", error: error.message });
    }
};

export const getInventoryTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: user_id, role } = req.user;

        const transactionId = parseInt(id);
        if (isNaN(transactionId)) {
            return res.status(400).json({ message: "Invalid inventory transaction ID" });
        }

        const transaction = await prisma.inventory_transactions.findUnique({
            where: { id: transactionId },
            include: { inventory: true },
        });

        if (!transaction) {
            return res.status(404).json({ message: "Inventory transaction not found" });
        }

        if (role !== 'admin' && transaction.user_id !== user_id) {
            return res.status(403).json({ message: "Unauthorized access to this inventory transaction" });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving inventory transaction", error: error.message });
    }
};