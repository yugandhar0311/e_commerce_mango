//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const User = require('../../models/userModel')


//login user api
app.post("/login", async (req, res, next) => {
    const {email, password} = req.body
    

    // find the user by email
    const isUserFound = await User.findOne({email})
    
    if(isUserFound){
        // if user found validate the email and password and send the message to user
        if(isUserFound.email === email && isUserFound.password === password){
            // res.status(200).json({message : `welcome ${isUserFound.name}`})
            const payload = { email };
            const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
            res.send({ jwtToken });
        }else{
            res.status(400).json({message : "please check your email or password"})
        }    
    }else{
        // if the user is not found send the message
        res.status(404).json({message : "User is not found"})
    }
    
  });

// exports the api
module.exports = app