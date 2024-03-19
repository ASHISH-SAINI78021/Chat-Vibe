const Chat = require("../models/chat.js");
const User = require("../models/user.js");

module.exports.accessChat = async(req ,res)=> {
    try {
        const {userId} = req.body;

        if (!userId){
            return res.send({
                success : false ,
                messsage : "UserId can not be empty"
            })
        }
    
    
        // it will find the chat where gropchat is false and current user id is equal to second user id
        // $elemMatch ensures that atleast one element in the user array satifies the condition
        let isChat = await Chat.find({
            isGroupChat : false ,
            $and: [
                // current user must be matched with the given id
                {users: {$elemMatch : {$eq: req.user._id}}} ,
                {users: {$elemMatch : {$eq : userId}}}
            ]
        }).populate("users" , "-password").populate("latestMessage");

        // isChat -> collections of documents
        isChat = await User.populate(isChat , {
            path : "latestMessage.sender" ,
            select : "pic email"
        });

        
        if (isChat.length > 0){
            return res.send({
                success : true ,
                chat : isChat[0]
            })
        }
        else {
            let chatData = {
                chatName: "sender" ,
                isGroupChat : false ,
                users :  [req.user._id , userId]
            }

            try {
                const createdChat = await Chat.create(chatData);

                const fullChat = await Chat.findOne({_id : createdChat._id}).populate("users" , "-password");

                return res.send({
                    success : true ,
                    fullChat
                })
            } catch (err) {
                console.log(err);
                return res.send({
                    success : false ,
                    err
                })
            }
        }



        // can use this also
        // let isChat = await Chat.find({
        //     isGroupChat: false,
        //     "users": { $all: [req.user._id, userId] }
        // });


    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            message : "Got some error in accessChat controller"
        })
    }
   
}


// || fetch chats
module.exports.fetchChat = async(req , res)=> {
    try {
        let chats = await Chat.find({ users: req.user._id })
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    .populate("latestMessage")
    .sort({updatedAt : -1});

    chats = await User.populate(chats , {
        path : "latestMessage.sender" ,
        select : "pic email"
    })

        return res.send({
            success : true,
            chats
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            err
        })
    }
}

// || create group chat route
module.exports.createGroupChat = async(req , res)=> {
    try {
        let users = req.body.selectedUser;
        console.log(users);
        console.log(req.body.name);
        if (!users || !req.body.name){
            return res.send({
                success : false ,
                message : "Please fill all the fields"
            })
        }
        
        console.log("hi");
        users = JSON.parse(users);

        if (users.length < 2){
            return res.send({
                success : false ,
                message : "more than 2 users are required"
            })
        }

        users.push(req.user);

        const groupChat = await Chat.create({
            chatName : req.body.name ,
            users : users ,
            isGroupChat : true ,
            groupAdmin : req.user
        });

        const fullGroupChat = await Chat.findOne({
            _id : groupChat._id
        }).populate("users" , "-password").populate("groupAdmin" , "-password");

        return res.send({
            success : true ,
            fullGroupChat
        })

    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            message : "Got error in create group chat controller" ,
            err
        })
    }
}


// || rename group
module.exports.renameGroup = async (req , res)=> {
    try {
        const {chatId , chatName} = req.body;
        const updatedChat = await Chat.findByIdAndUpdate(chatId ,{
            chatName
        } , {new : true}).populate("users" , "-password").populate("groupAdmin" , "-password");

        if (!updatedChat){
            return res.send({
                success : false ,
                message : "Chat not found"
            })
        }

        return res.send({
            success: true ,
            updatedChat
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            message : "got error in rename group controller" ,
            err
        })
    }
}


// || add to group
module.exports.addToGroup = async(req , res)=> {
    try {
        const {chatId , userId} = req.body;
        if (!chatId){
            return res.send({
                success : false ,
                message : "Please provide the chat id"
            })
        }
        if (!userId){
            return res.send({
                success : false ,
                message : "Please provide the user id"
            })
        }
        const chat = await Chat.findByIdAndUpdate(chatId , {
            $push : {users : userId} 
        }, {new : true}).populate("users" , "-password").populate("groupAdmin" , "-password");;



    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            message : "Got error in add to group controller" ,
            err
        })
    }
}


// || remove from group
module.exports.removeFromGroup = async(req , res)=> {
    try {
        const {chatId , userId} = req.body;
        if (!chatId){
            return res.send({
                success : false ,
                message : "Please provide the chat id"
            })
        }
        if (!userId){
            return res.send({
                success : false ,
                message : "Please provide the user id"
            })
        }
        const chat = await Chat.findByIdAndUpdate(chatId , {
            $pull : {users : userId} 
        }, {new : true}).populate("users" , "-password").populate("groupAdmin" , "-password");;



    } catch (err) {
        console.log(err);
        return res.send({
            success : false ,
            message : "Got error in add to group controller" ,
            err
        })
    }
}