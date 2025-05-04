import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as saleItemController from "../controllers/sale_items.controller.js";

const saleItemRouter = Router();

saleItemRouter.post("/", authenticate, saleItemController.createSaleItem);
saleItemRouter.get("/", authenticate, saleItemController.getAllSaleItems);
saleItemRouter.get("/:id", authenticate, saleItemController.getSaleItemById);
saleItemRouter.put("/:id", authenticate, saleItemController.updateSaleItem);
saleItemRouter.delete("/:id", authenticate, saleItemController.deleteSaleItem);

export default saleItemRouter;
