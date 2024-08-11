// import Conversation from "../models/conversation.model.js";
// import Message from "../models/message.model.js";
// import { getReceiverSocketId, io } from "../SocketIO/server.js";

// export const sendMessage = async (req,res)=>{
//     // console.log("Message Sent",req.params.id,req.body.message)
//     try {
//         // const message = req.body.message; we destructured it below
//         //const id = req.params.id; we destructured it below
//         const {message} = req.body; // we got this from message model's message
//         const {id:receiverId} = req.params; // ham url main dusaron ka id dekhte hai woh dikhta hai url main so receiver id
//         const senderId = req.user._id; // current logged in user and yea ham MIDDLEWARE se jo banaya tha usse mil raha hai and user._id here id is is payload sent from JWT TOKEN

//         // checking is message is available in database of message in Conversation
//         let conversation = await Conversation.findOne({
//             members:{$all:[senderId,receiverId]} //checks ki conversation hai kya members main using $all
//         })
//         // IF conversation IS NOT AVAILABLE THEN WE CREATE IT 
//         if(!conversation){
//             conversation = await Conversation.create({
//                 members: [senderId,receiverId],
//             })
//         }
//         // we are now creating message
//         const newMessage = new Message({
//             senderId,
//             receiverId,
//             message, //from const {message} = req.body;
//         })

//         //storing in message array of conversation model (conversation.model.js)
//         if(newMessage){
//             conversation.messages.push(newMessage._id) //  WE ARE PUSHING THE ID OF MESSAGE MODEL IN HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         }

//         // now saving in this one will save first then other we want it together
//         // await conversation.save();
//         // await newMessage.save();

//         await Promise.all([conversation.save(), newMessage.save()]); // parallel main run karega
//         const receiverSocketId = getReceiverSocketId(receiverId);
//         if(receiverSocketId){
//             io.to(receiverSocketId).emit('newMessage', newMessage);
//         }

//         res.status(201).json({
//             message:"message sent successfully",
//             newMessage, //start main postman main bhejne wale hai
//         });


//     } catch (error) {
//         console.log("Error in sendMessage", error)
//         res.status(500).json({error:"Internal server error"})
//     }
// }


// export const getMessage = async (req,res) =>
// {
//     try {
//         const {id: chatUser} = req.params; // chatUser is our receiver here
//         const senderId = req.user._id; 

//         // checking if conversation has started between the user or not
//         let conversation = await Conversation.findOne({
//             members: { $all: [senderId, chatUser]},
//         }).populate("messages")
//         // if conversation is not available then we return empty array
//         if(!conversation){
//             return res.status(201).json([]) // we returning empty array
//         }
        
//         // if conversation is available then we are fetching all messages from conversation model

//         const messages = conversation.messages  // populate jo kiya woh message ham liye and and show kar rahe hai and messages is from conversation model
//         res.status(201).json(messages);

//     } catch (error) {
//         console.log("Error in getMessage", error)
//         res.status(500).json({error:"Internal server error"});
//     }
// }




import { getReceiverSocketId, io } from "../SocketIO/server.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]); // run parallel
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id; // current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(201).json([]);
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    console.log("Error in getMessage", error);
    res.status(500).json({ error: "Internal server error" });
  }
};