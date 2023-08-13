const express=require('express');
const app=express();

//load config using env file

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware needed to pass json request body

app.use(express.json());

//import routes for todo API

const toDoroutes=require("./routes/todos");

//mount the todo API routes
app.use("/api/v1",toDoroutes);


//starting the server

app.listen(PORT,()=>{
    console.log(`server started sucesfully at ${PORT}`);

})

//connecting to the db

const dBConnect=require("./config/database");
dBConnect();


app.get("/",(req,res)=>{
    res.send(`<h1> This is Homepage<h1>`);
})