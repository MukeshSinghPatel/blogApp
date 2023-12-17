const mongoose=require("mongoose");
const { Schema }=mongoose;
const blogPostSchema=new Schema({
    title: {
        type:String,
        // required:true
    },
    description:{
        type: String,
        // required:true
    } 
},
{
    timestamp :true
}
);
module.exports=mongoose.model("BlogPost", blogPostSchema);