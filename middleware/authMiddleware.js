const JWT = require("jsonwebtoken");

module.exports.isLoggedIn = (req , res , next)=> {
    try{
        const decode = JWT.verify(req.headers.authorization , process.env.JWT_TOKEN);

        // if authentication is successful then add the decoded user info in the request
        req.user = decode;

        // call the next middleware
        next();
    }
    catch(err){
        res.send(err);
    }
}

