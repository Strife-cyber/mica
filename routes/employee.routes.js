import { Router } from "express";
import { authenticate, authorize } from "../controllers/auth.controller.js";
import * as employeeController from "../controllers/employee.controller.js";

const employeeRouter = Router();

// Create a new employee
employeeRouter.post("/", authenticate, employeeController.createEmployee);
employeeRouter.get("/", authenticate, employeeController.getAllEmployees);
employeeRouter.get("/:businessId", authenticate, authorize(['employee']), employeeController.getEmployeeByBusinessId);
employeeRouter.put("/:id", authenticate, authorize(['business', 'admin']), employeeController.updateEmployeeRights);
employeeRouter.delete("/:id", authenticate, authorize(['business', 'admin']), employeeController.deleteEmployeeBanningAccess);

export default employeeRouter;
