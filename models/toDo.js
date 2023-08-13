const mongoose=require("mongoose");

const toDoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,

        },
        CreatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        UpdateAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports=mongoose.model("Todo",toDoSchema);