import express from "express";
const router = express.Router();
import { verifyToken } from "../middlewares/auth/jwt.middelware";
import { persistSesson } from "../controllers/auth.controller";
router.get("/", verifyToken, persistSesson);

module.exports = router;
