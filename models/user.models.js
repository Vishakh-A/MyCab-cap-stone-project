const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created:{
        type:String,
        required:true
    }
}) 

module.exports = new mongoose.model('User',userSchema);