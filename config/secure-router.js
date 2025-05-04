import express from "express";
import rateLimit from "express-rate-limit";
import { body, validationResult } from 'express-validator';
import { authenticate } from "../controllers/auth.controller.js";
import { login, register } from "../controllers/user.controller.js";

const router = express.Router();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false
});

const validateRegister = [
    body("username").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
        next();
    }
];

router.post("/login", apiLimiter, login);
router.post("/register", apiLimiter, validateRegister, register);

export default router;
