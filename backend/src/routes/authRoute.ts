// package imports
import { Request, Response, Router } from "express";
import { ZodError } from "zod";
import bcrypt from "bcrypt";

// named imports
import { registerSchema } from "../validations/authValidation.js";
import { formatError } from "../Errors/zodError.js";
import prisma from "../config/db.js";

const router = Router();

// Register
// @ts-ignore
router.post("/register", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email
            }
        });
        if(user) {
            return res.status(422).json({message: "User with the given email already exists"});
        }
        // hashing password
        const salt = await bcrypt.genSalt(10);
        payload.password = await bcrypt.hash(payload.password, salt);
        const newUser = await prisma.user.create({
            data: {
                email: payload.email,
                name: payload.name,
                password: payload.password,
            }
        });
        res.status(200).json(newUser);
    } catch (error) {
        if(error instanceof ZodError) {
            const errors = formatError(error);    
            return res.status(422).json({message: "Invalid data", errors});    
        }
        return res.status(500).json({message: "Something went wrong", error: error});
    }
});

export default router;