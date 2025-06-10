import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as businessController from "../controllers/business.controller.js";

const businessRouter = Router();

businessRouter.post("/", authenticate, businessController.createBusiness);

businessRouter.get("/", authenticate, businessController.getAllBusinesses);

businessRouter.get("/:id", authenticate, businessController.getBusinessById);

businessRouter.put("/:id", authenticate, businessController.updateBusiness);

businessRouter.delete("/:id", authenticate, businessController.deleteBusiness);


export default businessRouter;
