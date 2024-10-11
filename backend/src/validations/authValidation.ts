import {z} from "zod";

export const registerSchema = z.object({
    name: z
        .string({message: "Name is required"})
        .min(3, {message: "Name must be of 3 character"}),
    email: z
        .string({message: "Email is required"})
        .email({message: "Email must be of 3 character"}),
    password: z
        .string({message: "Password is required"})
        .min(6, {message: "Password must be of 6 character"}),
    confirmPassword: z
        .string({message: "Password is required"})
        .min(6, {message: "Password must be of 6 character"}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password not match", path: ["confirmPassword"]
});