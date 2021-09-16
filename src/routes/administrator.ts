import express from "express";
import {
  newAdministrator,
  modifyAdministrator,
  fetchAllAdministrator,
  oneAdministrator,
  loginAdministrator,
} from "../controllers/administrator";

const router = express.Router();

router.post("/", newAdministrator);
router.post("/login", loginAdministrator);

router.patch("/:id", modifyAdministrator);
router.get("/", fetchAllAdministrator);
router.get("/:id", oneAdministrator);

export default router;
