import User from "../models/user.model.js";
import bcrypet from "bcryptjs";

export const signup=async(req,res)=>{
    
    const {fullname,email,password,confirmPassword}= req.body;

    try {
        if(password !== confirmPassword){
            return res.status(400).json({message:"Passwords do not match"})
        }
        // JAHA JAHA BHI DATABASE AATA HAI WAHA HAME AWAIT USE KARNA HAI
        //User.findOne here "User" collection ka naam hai woh hamne define kiya tha user.model.js main
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        //Hashing the password
        const hashPassword = await bcrypet.hash(password, 10);

        // we will store this information in database
        const newUser = await new User({
            fullname,
            email,
            password:hashPassword,
        })
        //saving in database
        await newUser.save();
        res.status(201).json({message:"User created successfully"});

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}