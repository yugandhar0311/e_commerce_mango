// importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Order = require('../../models/orderModel')
const authenticateToken = require('../../middleware/authenticateuser')


//get the orders my using email 
app.get("/order", authenticateToken ,async (req, res, next) => {
    const email = req.body.email
    // getting the email id from the req body
    const getorders = await Order.find({email})
    
    // if orders found sending that product
    if(getorders){
        res.status(200).json(getorders)
    }else{
    // if orders not found sending the message to user
        res.status(404).json({message : "no orders found"})
    }
    
  });
// exports the api
module.exports = app