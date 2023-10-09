const user=require("../models/sign");

exports.userdata=async (req,res)=>{
    const {email}=req.body;

        console.log("userEmailA",email);
        try{
            let exituser=await user.findOne({email});
            console.log(exituser);
            if(exituser){
                res.json({
                    url:exituser.url
                 })
            }
            
        }catch(err){
            console.log(err);
        } 

}