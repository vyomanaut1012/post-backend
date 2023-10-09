const user=require("../models/sign");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();
exports.login= async (req,res)=>{
    try{
        const {email,password}=req.body;
        let existingUser = await user.findOne({email});
        console.log("existingUser", existingUser);
        if (!existingUser) {
            return res.status(200).json({
                success: true,
                message: "NotRegistered",
            });
        }
       
        if(await bcrypt.compare(password,existingUser.password)){
            const payload={
                email:existingUser.email,
                id:existingUser._id,
            }
            //  generate token using jwt
               let token= jwt.sign(payload ,process.env.JWT_SECRET,
                 {
                  expiresIn:"2d"
                 });          
                 res.json({
                    "Token":token,
                    "email":email,
                     message: "Login successful",
                 })
         }else{
            return res.json({
                message:"wrongPassword"
            })
         }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({

            message: "An error occurred",
        });
    }
}    