const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    bookName1:{
        type:String,
        required:true
    },
    bookName2:{
        type:String,
        required:true
    },
    bookAuthor1:{
        type:String,
        required:true
    },
    bookAuthor2:{
        type:String,
        required:true
    },
    bookImage1:{
        type:String,
        required:true
    },
    bookImage2:{
        type:String,
        required:true
    },
    userId1:{
        type:String,
        required:true
    },
    userId2:{
        type:String,
        required:true
    },
    approved:{
        type:Boolean,
        required:true
    }

})

const requests = mongoose.model('requests',requestSchema)
module.exports = requests