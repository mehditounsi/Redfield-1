const userController = require("../controllers/UserController.js");
const express = require("express");
const router = express.Router();

router.post("/redField/user", userController.createOneUser);
router.get("/redField/user", userController.findAll);

module.exports = router;
