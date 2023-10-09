const user=require("../models/show");
exports.showapi=async (req,res)=>{
    try{
        const data=await user.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }  
}