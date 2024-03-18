const mongoose = require("mongoose");
const {Schema} = mongoose;

const messageSchema = Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"
    } ,
    content : {
        type : String
    } , 
    chat : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Chat"
    }
} , {timstamps : true});


const Message = mongoose.model("Message" , messageSchema);
module.exports = Message;