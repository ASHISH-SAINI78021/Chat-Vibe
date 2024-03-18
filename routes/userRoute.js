const express = require("express");
const {isLoggedIn} = require("../middleware/authMiddleware.js");
const userController = require("../controllers/userController.js");


const router = express.Router();

router.get("/" , isLoggedIn , userController.searchController);

module.exports = router;