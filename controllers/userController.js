const User = require("../models/user.js");

module.exports.searchController = async (req, res) => {
    // Extracting search keyword from query parameters
    const keyword = req.query.search ? {
        email: { $regex: req.query.search, $options: "i" }
    } : {};

    // keyword -> it will return the query

    try {
        // Find all users matching the keyword
        // find -> it will return the query
        // to execute query we uses exec method
        const users = await User.find({
            $and: [
                keyword,
                { _id: { $ne: req.user._id } }
            ]
        }).select("-password").select("-answer").exec();
        
        // Send the response with the found users
        return res.json({
            success: true,
            users: users
        });
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error("Error occurred during user search:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}
