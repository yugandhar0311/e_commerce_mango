const mongoose = require('mongoose')

const URI = "mongodb+srv://sajid_01:sajid_01@cluster0.lsme9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    console.log("db connected")
}

module.exports = connectDB;