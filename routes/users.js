const express = require("express");
const router = express.Router();
const register = require("../controllers/users/register");
const getAllUsers = require("../controllers/users/getAllUsers");
const getUserById = require("../controllers/users/getUserById");
const deleteUserById = require("../controllers/users/deleteUserById");
const updateUserById = require("../controllers/users/updateUserById");
const login = require("../controllers/users/login");

router.post("/register", register);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);
router.post("/login", login);




module.exports = router;
