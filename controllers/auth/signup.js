//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const User = require('../../models/userModel')

//signup user api
app.post("/signup", async (req, res, next) => {
    const {email, contact_no} = req.body

    // search for user is already exists
    const isUserFound = await User.findOne({email})
    
    // if user is already exists
    if(isUserFound){
        res.status(400).json({message : "user is already existed"})
    }else{
      // is user is not exists then proceed to signup
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            contact_no: req.body.contact_no
          
        });
    
        // posting the new user to the collections
        user
          .save()
          .then(result => {
            // console.log(result);
            res.status(201).json({
              message: "user is succesfully registered",
              createdUser: result
            });
          })
          // if get any error show that error
          .catch(err => {
            res.status(500).json({
              error: err
            });
          });
    }
    
  });

// exports the api
module.exports = app