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
        messages:{
            type:[{
                type:Schema.ObjectId,
                ref:"messages"
            }],
            default:[]
        }
}, 
{ 
    timestamps: {
        createdAt: 'joinedAt'
    } 

})

module.exports = mongoose.model("classrooms", classroomsSchema);
