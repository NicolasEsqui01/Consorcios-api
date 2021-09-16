const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller.js");
router.post("/login", UserController.login);
router.get("/:id", UserController.findOne);
router.patch("/:id", UserController.modifyData);
router.post("/", UserController.AddUser);
router.get("/", UserController.fetchAll);


module.exports = router;
