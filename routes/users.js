const express = require("express");
const router = express.Router();
const createUser = require("../controllers/users/createUser");
const getAllUsers = require("../controllers/users/getAllUsers");
const getUserById = require("../controllers/users/getUserById");
const deleteUserById = require("../controllers/users/deleteUserById");
const updateUserById = require("../controllers/users/updateUserById");


router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);



module.exports = router;
