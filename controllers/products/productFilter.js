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
const validator = require('validator')
const authenticateToken = require('../../middleware/authenticateuser')

//filter the product
app.post("/filter", authenticateToken ,async (req, res, next) => {
    //validating the body param value for filter the product
    const escpQuery = Object.assign({}, ...Object.keys(req.body).map(obKey => {
        return {[obKey]: validator.escape(req.body[obKey])}
      }))
    
    const filter = escpQuery.filter || ''
    const filterQuery = {
        brand: (filter, req.body.brand),
        category: (filter, req.body.category),
      }
    const isProductFound = await Product.find(filterQuery)
    console.log(isProductFound)
    if(isProductFound){
        res.status(200).send(isProductFound)
    }else{
        res.status(200).send({"message": "product not found"})
    } 
     
});

module.exports = app