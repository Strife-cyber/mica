import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as InventoryTransactionController from "../controllers/inventory_transaction.controller.js";

const inventoryTransactionRouter = Router();

inventoryTransactionRouter.get("/", authenticate, InventoryTransactionController.getAllInventoryTransactions);
inventoryTransactionRouter.get("/:id", authenticate, InventoryTransactionController.getInventoryTransactionById);

export default inventoryTransactionRouter;
