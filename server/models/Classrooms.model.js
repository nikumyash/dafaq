const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const classroomsSchema = Schema({
        createdBy:{
            type:mongoose.Types.ObjectId,
            ref:'users',
        },
        attendees:{
            type:[],
            ref:"classrooms",
        },
        materials:{
            type:[String],
        }
}, 
{ 
    timestamps: {
        createdAt: 'joinedAt'
    } 

})

module.exports = mongoose.model("classrooms", classroomsSchema);
