const user=require("../models/sign");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.signup=async (req,res)=>{
    try{
       const {name,email,phone,password,confirmPassword,url}=req.body;
       const existUser=await user.findOne({email});
       if(existUser){
          return res.json({
            message:"exist"
          });
        //   return console.log("user already exists");
       }
       let hashedcode;
       try{
         hashedcode=await bcrypt.hash(password,10);
       }catch(err){
         console.log(err);
         return res.status(500).json({
             success:false,
             message:"error in hashing password",
         })
       }
       const userdata= new user({
          name:name,
          email:email,
          phone:phone,
          password:hashedcode,
          confirmPassword:confirmPassword,
          url:url,
       })
        console.log(userdata);
        userdata.save();
          let existingUser = await user.findOne({ email });
          const payload={
          email:existingUser.email,
          id:existingUser._id,
          }
          let token= jwt.sign(payload ,process.env.JWT_SECRET,
          {
           expiresIn:"2d"
          });          
          res.json({
             "Token":token,
             "email":email,
              message: "signUp successfully",
          })
        
        // return res.status(200).json({
        //     success:true,
        //     data:userdata,
        //     message:"signUp successfully",
        // })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:`data is not send in database`,
        })
    }
}