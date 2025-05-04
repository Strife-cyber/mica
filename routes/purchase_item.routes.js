import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as purchasesItemController from "../controllers/purchase_items.controller.js";

const purchaseItemRouter = Router();

purchaseItemRouter.post("/", authenticate, purchasesItemController.createPurchaseItem);
purchaseItemRouter.get("/", authenticate, purchasesItemController.getAllPurchaseItems);
purchaseItemRouter.get("/:id", authenticate, purchasesItemController.getPurchaseItemById);
purchaseItemRouter.put("/:id", authenticate, purchasesItemController.updatePurchaseItem);
purchaseItemRouter.delete("/:id", authenticate, purchasesItemController.deletePurchaseItem);

export default purchaseItemRouter;
