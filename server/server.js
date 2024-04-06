const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();
const app = express();
const classroomRouter = require("./routes/classroom.route")
const doubtRouter = require("./routes/doubt.route")

connectDB();

app.get("/",(req,res)=>{
    res.json({status:"ok",message:"test"});
})
app.use("/classroom",classroomRouter);
app.use("/doubt",doubtRouter);
app.use("*",(req,res)=>{
    res.json({err:"Something went wrong"});
});

app.listen(6969,()=>{
    console.log("Server listening to port no 6969");
});