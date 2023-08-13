const Todo=require("../models/toDo");

exports.deleteTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            succes:true,
            message:"todo deleted",
        })


    }
    catch(err){

        console.error(err);
        res.status(500).json({
            succes:false,
            error:err.message,
            message:'server error',
        });
        

    }
}