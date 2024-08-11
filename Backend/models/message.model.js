// import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema({
//     senderId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User", // mongodb ka user.model.js jo banay woh User collection diya hai yaha reference main as we taking Id and it is object
//         // if we import it we can use Crud Operation
//         required:true
//     },
//     receiverId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User", 
//         required:true
//     },
//     message:{
//         type:String,
//         required:true,
//     }

// },{timestamps:true});

// const Message = mongoose.model("message",messageSchema);

// export default Message;

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);

export default Message;