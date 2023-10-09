const mongoose=require("mongoose");
const PostSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    post:[
        {
            title:{
                type:String
            },
            content:{
                type:String
            },
            url:{
                type:String
            },
            tag:{
                type:String
            },
            date:{
                type:String
            }
        }
    ]
})

const File=mongoose.model("post-data",PostSchema);
module.exports=File;