const mongoose=require("mongoose");

require("dotenv").config();

const dBConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        usenewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB connected succefully"))
    .catch((error)=>{
        console.log("issue in connecting");
        console.error(error.message);
        process.exit(1);
    });

}

module.exports=dBConnect;