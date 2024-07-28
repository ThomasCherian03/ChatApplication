import mongoose from "mongoose";

// making schema
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
    }
},{timestamps:true})

// making schema into model
const User=mongoose.model("User",userSchema)
export default User
