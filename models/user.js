const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    email : {
        type : String ,
        unique : true
    } , 
    password : {
        type : String ,
        required : true
    } ,
    answer : {
        type : String ,
    } ,
    pic : {
        type : String ,
        default : "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
} , {timestamps : true});

const User = mongoose.model("User" , userSchema);
module.exports = User;