//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Wishlist = require('../../models/wishlistModel')
const authenticateToken = require('../../middleware/authenticateuser')

//add products to the whislist
app.post("/wishlist",authenticateToken ,(req, res) => {

    const list = new Wishlist({
        
        product_name: req.body.product_name,
        email : req.body.email,
        category: req.body.category
      
    });

    list
      .save()
      .then(result => {
        // console.log(result);
        res.status(201).json({
          message: "wishlist posted",
          createduser: result
        });
      })
      .catch(err => {
        //gives error if fails to get
        res.status(500).json({
          error: err
        });
      });
    
})

module.exports = app