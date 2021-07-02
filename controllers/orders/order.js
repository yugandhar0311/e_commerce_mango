// importing all the required modules
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Order = require('../../models/orderModel')
const authenticateToken = require('../../middleware/authenticateuser')

//making the new order api
app.post("/order", authenticateToken, async (req, res, next) => {
       
        // getting the data from the req body
        const order = new Order({
            email : req.body.email,
            products: req.body.products,
            shippingAddress: req.body.shippingAddress,
            mobile_no : req.body.mobile_no,
            paymentMethod : req.body.paymentMethod,
            totalPrice: req.body.totalPrice,
            isPaid : req.body.isPaid

        });
        
        // console.log(req.body)

        // exec the order making
        order
          .save()
          .then(result => {
            // console.log(result);
            res.status(201).json({
              message: "your order is placed successfully",
              createdOrder: result
            });
          })
          .catch(err => {
            // if any error is there sending the error
            res.status(500).json({
              error: err
            });
          });
  
    
  });

// exports the api
module.exports = app