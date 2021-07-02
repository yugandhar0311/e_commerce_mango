//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const User = require('../../models/userModel')
const authenticateToken = require('../../middleware/authenticateuser')

//get the user profile 
app.get("/profile/:id", authenticateToken ,async (req, res, next) => {
    // getting the id from the path params
    const id = req.params.id

    // searching for the user
    const isUserFound = await User.findOne({_id : id})
    
    // if the user is found send the data
    if(isUserFound){
        res.status(200).json(isUserFound)
    }else{
    // if user is not found send the message
       res.status(400).json({message : "user is not existed"})
    }
    
  });

  // exports the api
module.exports = app