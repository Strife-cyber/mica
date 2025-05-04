import { Router } from "express";
import { authenticate } from "../controllers/auth.controller.js";
import { isLoggedIn, profile } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/profile", authenticate, profile);
userRouter.get("/status", authenticate, isLoggedIn);

export default userRouter;
