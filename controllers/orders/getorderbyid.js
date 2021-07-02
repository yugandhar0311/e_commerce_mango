// importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Order = require('../../models/orderModel')
const authenticateToken = require('../../middleware/authenticateuser')


//get the order by using the order id
app.get("/order/:id", authenticateToken  ,async (req, res, next) => {
    const _id = req.params.id
    // getting that id from the path params
    // console.log(_id)
    const getorders = await Order.findOne({_id})
    // finding that product
    
    if(getorders){
        // if product is found
        res.status(200).json(getorders)
    }else{
        // if product not found
        res.status(404).json({message : "no orders found"})
    }
    
  });

module.exports = app