const user=require("../models/sign");
exports.updateURL= async(req,res)=>{
    const {email,url}=req.body;
    const Email=email+"@gmail.com";
    console.log("url", url);
    console.log("email",Email);
    await user.updateOne({"email":Email},{
        $set:{
            url:url
        }});
}