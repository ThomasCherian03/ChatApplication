import jwt from "jsonwebtoken";

const createTokenAndSaveCookie=(userId,res)=>{

    const token=jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"10d"
    });

    res.cookie("jwt",token,{
        httpOnly:true,  // saves from xss attack
        secure:true,
        sameSite:"strict" // saves from csrf attack
    })
};

export default createTokenAndSaveCookie;