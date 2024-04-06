const express = require("express");
const connectDB = require("./config/dbConfig");

const app = express();

connectDB();

app.get("/",(req,res)=>{
    res.json({status:"ok",message:"test"});
})

app.listen(6969,()=>{
    console.log("Server listening to port no 6969");
});