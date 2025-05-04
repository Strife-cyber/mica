import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as purchasesController from "../controllers/purchase.controller.js";

const purchasesRouter = Router();

purchasesRouter.post("/", authenticate, purchasesController.createPurchase);
purchasesRouter.get("/", authenticate, purchasesController.getAllPurchases);
purchasesRouter.get("/:id", authenticate, purchasesController.getPurchaseById);
purchasesRouter.put("/:id", authenticate, purchasesController.updatePurchase);
purchasesRouter.delete("/:id", authenticate, purchasesController.deletePurchase);

export default purchasesRouter;