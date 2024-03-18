const express = require("express");
const registerController = require("../controllers/registerController.js");
const {isLoggedIn} = require("../middleware/authMiddleware.js");


const router = express.Router();

// register method
router.post("/register" , registerController.registerController);
router.post("/login" , registerController.loginController);


// forgot password || Post
router.post("/forgotpassword" , registerController.forgotpasswordController);

// Private route
router.get("/auth-user" , isLoggedIn , (req , res)=> {
    return res.send({
        success: true
    })
})



module.exports = router