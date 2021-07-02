//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const User = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

// updating user profile
app.patch('/profile/:id', authenticateToken ,(req, res) =>{
    const id = req.params.id
    // getting the user id by path params
    // console.log(req.body)
    const updateProfile = {}
    
    // updating the user by id and set the new data
    User.updateOne({_id : id}, {$set: updateProfile}).exec().then(
        result =>{
            res.status(200).json({
                message : "user is updated",
                updatedProfile : result
            })
        }
    // if any error we get send the error
    ).catch(err => {
        res.status(500).json({
            error : err
        })
    })

})

// exports the api
module.exports = app