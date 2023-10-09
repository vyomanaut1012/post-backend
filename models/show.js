const mongoose=require("mongoose");
const ShowSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
});

const File=mongoose.model("show", ShowSchema);
module.exports=File;