const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const doubtSchema = Schema({
        createdBy:{
            type:String,
            required:true,
        },
        classroom:{
            type:String,
            required:true,
        },
        text:{
            type:String,
            required:true,
        },
        solution:{
            type:String,
            default:"",
        }
}, 
{ 
    timestamps: {
        createdAt: 'createdAt'
    } 

})

module.exports = mongoose.model("doubts", doubtSchema);
