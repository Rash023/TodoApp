const Todo=require("../models/toDo");


exports.getTodo= async(req,res)=>{
    try{
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",


        });


    }
    catch(err){
        console.log(error);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        });

    }
}



exports.getTodobyId=async(req,res)=>{
    try{
        const id = req.params.id;
        const todo= await Todo.findById({_id:id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given ID"
            })
        }


        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully fetched`,
        })
    }
    catch(err){
        console.log(error);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        });
    }
}




