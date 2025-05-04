import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as inventoryController from "../controllers/inventory.controller.js";

const inventoryRouter = Router();

inventoryRouter.post("/", authenticate, inventoryController.createInventory);
inventoryRouter.get("/", authenticate, inventoryController.getAllInventory);
inventoryRouter.get("/:id", authenticate, inventoryController.getInventoryById);
inventoryRouter.put("/:id", authenticate, inventoryController.updateInventory);
inventoryRouter.delete("/:id", authenticate, inventoryController.deleteInventory);

export default inventoryRouter;