const mongoose = require('mongoose')

const UserScema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isActivated : {
        type : Boolean,
        default : false
    },
    activationLink : String
    
})

module.exports = mongoose.model('users', UserScema)