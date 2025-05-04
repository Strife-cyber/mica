import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import * as customerController from "../controllers/customer.controller.js";

const customerRouter = Router();

// Create a new customer
customerRouter.post("/", authenticate, customerController.createCustomer);

// Get all customers
customerRouter.get("/", authenticate, customerController.getAllCustomers);

// Get a customer by ID
customerRouter.get("/:id", authenticate, customerController.getCustomerById);

// Update a customer
customerRouter.put("/:id", authenticate, customerController.updateCustomer);

// Delete a customer
customerRouter.delete("/:id", authenticate, customerController.deleteCustomer);

export default customerRouter;
