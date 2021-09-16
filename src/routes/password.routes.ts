import { Router } from "express";
import { verifyToken } from "../middlewares/auth/jwt.middelware";
import { updatePassword, forgetPassword } from "../controllers/password.controller";

const router = Router();

router.patch("/update", verifyToken, updatePassword);
router.patch("/forget", forgetPassword);

export default router;