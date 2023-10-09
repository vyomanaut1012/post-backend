const Post=require("../models/Post");
const User=require("../models/sign");
exports.postData=async(req, res)=>{
  try{
    const {email,title,content,url,tag,date}=req.body;
    console.log(email);
    console.log(url);
    console.log(date);
    const exituser=await Post.findOne({email});
    const existing=await User.findOne({email});
    console.log(exituser);
    if(exituser){
          await Post.updateOne({email}
            ,{ $push:{
              post:{
              title:title,
              content:content,
              url:url,
              tag:tag,
              date:date,
           }}});
    }else{
         const PostData=new Post({
            email:email,
            name:existing.name,
            post:[
                {
                  title:title,
                  content:content,
                  url:url,
                  tag:tag,
                  date:date
                },
            ]
         });   
        await PostData.save();
        }
       return res.json({
          message:"publish"
        });
    }
    catch(err){
        return res.json({
            message:"post is not inserted"
        })
    }
}