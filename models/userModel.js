// Importing packages
const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const Userschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    contact_no:{
        type: String,
        required : true,
        unique : true
    },
});

const User = new mongoose.model("users",Userschema);

module.exports = User;