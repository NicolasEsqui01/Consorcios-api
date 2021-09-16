const express = require("express");
const Users = require("./users");
const router = express.Router();
const Auth = require("./auth");
import Administrator from "./administrator";
const Consortium = require("./consortiums");
import Office from "./office";
import Subscription from "./subscription.routes";
import password from "./password.routes";


//Routes root aplication:
router.use("/administrator", Administrator);
router.use("/users", Users);
router.use("/auth", Auth);
router.use("/consortiums", Consortium);
router.use("/office", Office);
router.use("/subscription", Subscription);
router.use("/password", password);

export default router;
