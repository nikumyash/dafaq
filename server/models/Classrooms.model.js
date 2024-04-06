const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const classroomsSchema = Schema({
        createdBy:{
            type:String,
            required:true,
        },
        attendees:{
            type:[String],
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            default:"",       
        }
}, 
{ 
    timestamps: {
        createdAt: 'joinedAt'
    } 

})

module.exports = mongoose.model("classrooms", classroomsSchema);
