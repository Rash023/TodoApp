const Todo= require("../models/toDo");


//create route controller

exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from body
        const {title,description}=req.body;
        //creating a new todo object and insert in db
        const response=await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created succesfully"

            }
            
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )

    }

}