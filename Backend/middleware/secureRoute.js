import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req,res,next)=>{
    try {

        // this is taking what
        const token = req.cookies.jwt;
        if (!token){
            return res.status(401).json({message: "No token, authorization denied."});
        }
        
        // this is taking what
        const decoded = jwt.verify(token,process.env.JWT_TOKEN);
        if(!decoded){
            return res.status(401).json({message: "Invalid token."});
        }

        // this is taking what
        const user = await User.findById(decoded.userId).select("-password");
        if(!user)
        {
            return res.status(401).json({message: "User not found."});
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log("Error in secureRoute ",error);
        res.status(500).json({message:"Error in secureRoute"});
        
    }
}
export default secureRoute;