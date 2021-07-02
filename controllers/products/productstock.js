//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

//check for product availability
app.get("/stock", authenticateToken ,async (req, res, next) => {
    //query params
    const product_name = req.query.product_name
    
    //search for product name
    const isProductFound = await Product.find({product_name})
    
    if(isProductFound){
        //if product stocks are available
        if(isProductFound.countInStock > 0 ){
            res.status(200).json({message:"your product is in stock"})
        }
        else{
            //if products are not available
            res.status(200).json({message:"your product is outoff stock"})
        }

    }
    else{
        res.status(404).json({message:"the product is not found"})
    }
    
  });

module.exports = app