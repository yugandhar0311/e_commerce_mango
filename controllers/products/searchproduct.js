//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

//search for products
app.get("/products", authenticateToken ,async (req, res, next) => {
  //query params
    const product_name = req.query.product_name
    
    //search for the product
    const isProductFound = await Product.find({product_name})
    
    //if product is found
    if(isProductFound){
       res.status(200).json(isProductFound)
    }
    //if product is not found
    else{
        res.status(404).json({message : "product is not found"})
    }
    
  });

module.exports = app