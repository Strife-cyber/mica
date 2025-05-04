import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as saleController from "../controllers/sales.controller.js";

const saleRouter = Router();

saleRouter.post("/", authenticate, saleController.createSale);
saleRouter.get("/", authenticate, saleController.getAllSales);
saleRouter.get("/:id", authenticate, saleController.getSaleById);
saleRouter.put("/:id", authenticate, saleController.updateSale);
saleRouter.delete("/:id", authenticate, saleController.deleteSale);

export default saleRouter;
