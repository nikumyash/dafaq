const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({status:"ok",message:"test"});
})



app.listen(6969,()=>{
    console.log("Server listening to port no 6969");
});