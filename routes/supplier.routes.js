import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as supplierController from "../controllers/supplier.controller.js";

const supplierRouter = Router();

supplierRouter.post("/", authenticate, supplierController.createSupplier);
supplierRouter.get("/", authenticate, supplierController.getAllSuppliers);
supplierRouter.put("/:id", authenticate, supplierController.updateSupplier);
supplierRouter.get("/:id", authenticate, supplierController.getSupplierById);
supplierRouter.delete("/:id", authenticate, supplierController.deleteSupplier);

export default supplierRouter;