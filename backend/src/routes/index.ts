// package imports
import { Router } from "express";

// named imports
import authRouter from "./authRoute.js";

const router = Router();

router.use("/auth", authRouter);

export default router;