const User=require("../models/show");
exports.showpost= async(req,res)=>{
    const {email, name, url, title, content, tag, date} = req.body;
    console.log("email",email);
    console.log("url",url);
    console.log("tag",tag);
    try{
        const data=await User.find();
        console.log(data[0]);
        if(data!==undefined){
            await User.updateOne({
                $set:{
                    email:email,
                    name:name,
                    url:url,
                    title:title,
                    content:content,
                    tag:tag,
                    date:date
                }
            });
        }else{
            const data=new User({
                  email:email,
                  name:name,
                  url:url,
                  title:title,
                  content:content,
                  tag:tag,
                  date:date
            })
            data.save();
            
        }
        
    }catch(err){
        console.log(err);
    }

}