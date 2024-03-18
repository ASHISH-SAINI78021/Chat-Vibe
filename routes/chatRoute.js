const express = require("express");
const {isLoggedIn} = require("../middleware/authMiddleware.js");
const chatController = require("../controllers/chatController.js");


const router = express.Router();


router.post("/" , isLoggedIn , chatController.accessChat);
router.get("/" , isLoggedIn , chatController.fetchChat);
router.post("/group" , isLoggedIn , chatController.createGroupChat);

// // it is for renaming the grpoup
router.put("/rename" , isLoggedIn , chatController.renameGroup);
router.put("/groupremove" , isLoggedIn , chatController.removeFromGroup);
router.put("/groupadd" , isLoggedIn , chatController.addToGroup);


module.exports = router;