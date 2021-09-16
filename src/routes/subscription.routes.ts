import { Router } from "express";
import { addSubscription } from "../controllers/subscription.controller";


const router: Router = Router();

router.post("/", addSubscription);



export default router;