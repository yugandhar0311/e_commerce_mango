//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const User = require('../../models/userModel')
const authenticateToken = require('../../middleware/authenticateuser')


//logout api
app.post("/logout", authenticateToken, async (req, res, next) => {
    
    //body params
    const {email, password} = req.body

    //check user exist
    const isUserFound = await User.findOne({email})
    
    if(isUserFound){
        //if email and password match with body params value
        if(isUserFound.email === email && isUserFound.password === password){
            res.status(200).json({message : `${isUserFound.name} logout successfully`})
        }else{
            res.status(400).json({message : "please check your email or password"})
        }    
    }else{
        res.status(404).json({message : "User is not found"})
    }
    
  });

module.exports = app