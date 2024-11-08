const mongoose = require('mongoose')

const TokenScema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    refreshToken : {
        type : String,
        required : true
    }
    
})

module.exports = mongoose.model('token', TokenScema)