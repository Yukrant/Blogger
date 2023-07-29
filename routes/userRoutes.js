const express = require("express");
const {
  getAllUsers,
  registerControllers,
  loginController,
} = require("../controllers/userControllers");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerControllers);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router;
