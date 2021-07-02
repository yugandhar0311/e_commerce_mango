//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const orders = require('../../models/orderModel')
const authenticateToken = require('../../middleware/authenticateuser')


//delete order
app.delete("/order/:id", authenticateToken ,async (req, res, next) => {
    //getting id from path params
    const _id = req.params.id
    
    //delete id using remove function
    orders.remove({_id}).exec().then(result => {
        res.status(200).json({message : "order deleted successfully"})
        
    }).catch(err =>{
        res.status(500).json({
            error : err
        })
    })
    
  });

module.exports = app