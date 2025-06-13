import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma-client.js";

export const register = async (req, res) => {
    const { username, password, email, role } = req.body;

    const existingUser = await prisma.users.findFirst({
        where: {
            OR: [{ username }, { email }]
        }
    });

    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.users.create({
        data: {
            username,
            password: hashedPassword,
            email,
            role: role || 'business'
        }
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.status(201).json({ message: 'User registered successfully', token: token });
}


export const login = async (req, res) => {
    const { identifier, password } = req.body;

    let user = await prisma.users.findUnique({
        where: { username: identifier }
    });

    if (!user) {
        user = await prisma.users.findUnique({
            where: { email: identifier }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.json({ token });
}

export const profile = async (req, res) => {
    const { id } = req.user;

    const user = await prisma.users.findUnique({
        where: { id },
        include: {
            plan: true
        }
    });

    if (!user) {
        res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
        username: user.username,
        email: user.email,
        role: user.role,
        plan: user.plan
    })
}

export const isLoggedIn = async (req, res) => {
    const { id } = req.user;

    if (!id) {
        res.status(200).json(false);
    }

    res.status(200).json(true);
}
