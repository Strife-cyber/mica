import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as planController from "../controllers/plan.controller.js";

const planRouter = Router();

planRouter.post("/", authenticate, planController.createPlan);
planRouter.get("/", authenticate, planController.getAllPlans);
planRouter.put("/:id", authenticate, planController.updatePlan);
planRouter.get("/:id", authenticate, planController.getPlanById);
planRouter.delete("/:id", authenticate, planController.deletePlan);
planRouter.get("/:id/summary", authenticate, planController.getPlanSummary);

export default planRouter;
