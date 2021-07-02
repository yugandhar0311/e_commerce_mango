//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const order = require('../../models/orderModel')
const authenticateToken = require('../../middleware/authenticateuser')

//get address
app.get("/address/:orderId", authenticateToken ,async (req, res, next) => {
    //path params
    const _id = req.params.orderId
    //search for order id
    const isOrderFound = await order.findOne({_id})
    //console.log(isProductFound)

    //if order found
    if(isOrderFound){
        res.status(200).json(isOrderFound.shippingAddress)
    }
    else{
        res.status(404).json({message:"the order is not found"})
    }
    
  });

module.exports = app