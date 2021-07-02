//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const users = require('../../models/userModel')
const authenticateToken = require('../../middleware/authenticateuser')

//delete 
app.delete("/user/:id", authenticateToken ,async(req,res,next)=> {

    const _id = req.params.id
    users.remove({_id}).exec().then(result => {
        //using .remove to remove user details
        res.status(200).json({msg : 'users removed successfully'})
    }).catch(err =>{
        res.status(500).json({
            error :err//if fails gives error
        });
    });

})

module.exports = app