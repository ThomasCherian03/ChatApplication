import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

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
        const hashPassword = await bcrypt.hash(password, 10);

        // we will store this information in database
        const newUser = await new User({
            fullname,
            email,
            password:hashPassword,
        })
        //saving in database
        await newUser.save();
        
        //generating token
        if(newUser){
            createTokenAndSaveCookie(newUser._id,res)
            res.status(201).json({message:"User created successfully",newUser});
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
};

export const login=async(req,res)=>{
    const {email,password}= req.body;
    try {
        // here User is model which we created
        const user = await User.findOne({email})
        // user is the single document which we receive and we want the password from it so we do user.password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid User Credential"})
        }
        createTokenAndSaveCookie(user._id,res);
        res.status(200).json({message:"User logged in successfully",user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email

        }});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

export const logout = async (req,res)=>{
    try {
        res.clearCookie('jwt');
        res.status(201).json({message:"User logged out successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}
