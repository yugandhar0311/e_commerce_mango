//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.raw());
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

//get product category
app.get("/category/:category", authenticateToken ,async (req, res, next) => {
    const category = req.params.category
    const isProductFound = await Product.find({category})
    if(isProductFound){
        res.status(200).send(isProductFound)
    }else{
        res.status(200).send({"message": "product not found"})
    } 
     
});

module.exports = app