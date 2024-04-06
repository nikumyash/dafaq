const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();
const app = express();
const Classroom = require("./models/Classrooms.model");
const Doubt = require("./models/Doubts.models");
const authCheck = require("./middlewares/authCheck.middleware");
var uuid = require('node-uuid');

const cors = require("cors");

connectDB();

app.use(express.urlencoded({ extended: true }));    
app.use(express.json());

app.use(cors());

app.use(authCheck);

app.post("/classroom",async(req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({error:"Invalid request"});
    }
    const classrooms = await Classroom.find({$or:[{createdBy:email},{attendees:email}]}).populate("name _id")
    return res.status(200).json({data:classrooms})
})
app.post("/classroom/new",async (req,res)=>{
    const {teacherMail,name,students} = req.body;
    if(!teacherMail|| !name){
        return res.status(400).json({error:"Please complete the form"});
    }
    let url = uuid.v4();
    let check = await Classroom.findOne({url:url});;
    while(check){
        url = uuid.v4();
        check = await Classroom.findOne({url:url});
    }
    const newClassroom = Classroom({createdBy:teacherMail,url:url,name:name,attendees:students});
    await newClassroom.save();
    return res.status(200).json({success:true});
})

app.post("/classroom/:url",async(req,res)=>{
    const {url} = req.params;
    const {mail} = req.query;
    let cur_cls = await Classroom.findOne({url:url});
    if(!cur_cls){
        return res.status(400).json({error:"Classroom does not exits"});
    }
    let attendees = cur_cls.attendees;
    let has_permisson = attendees.includes(mail);
    if(!has_permisson && cur_cls.createdBy!=mail){
        return res.status(400).json({error:"Cannot access the resource"});
    }
    let doubts = await Doubt.find({cls_url:url}).populate("cls_url text solution");
    return res.status(200).json({doubts:doubts,classroom_name:cur_cls.name});
})


app.post("/doubt/new",async (req,res)=>{
    const {mail,text,cls_url} = req.body;
    if(!mail || !text){
        return res.status(400).json({error:"Invalid input"});
    }
    const doubt = Doubt({createdBy:mail,cls_url:cls_url,text:text});
    const x = await doubt.save();
    return res.status(200);
})

app.get("/doubt/:id/reply",async(req,res)=>{
    const {text,id} = req.body;
    if(!text){
        return res.status(400).json({error:"text is empty"})
    }
    const doubt = await Doubt.findOne({_id:id});
    if(!doubt){
        return res.status(400).json({error:"error invalid doubt id"});
    }
    doubt.solution = text;
    await doubt.save();
    return res.status(200);
})

app.use("*",(req,res)=>{
    res.json({err:"Something went wrong"});
});

app.listen(6969,()=>{
    console.log("Server listening to port no 6969");
});