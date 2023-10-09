const Post=require("../models/Post");
exports.postapi=async (req,res)=>{
    try{
      const data=await Post.find();
      res.send(data);
    }catch(err){
      console.log(err);
    }
}