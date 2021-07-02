//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const products = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

//delete product
app.delete("/products/:id", authenticateToken ,async (req, res, next) => {
    // path params 
    const _id = req.params.id
    // by using remove(), delete product with the help of product id
    products.remove({_id}).exec().then(result => {
        // after remove response is product deleted successfully
        res.status(200).json({message : "product deleted successfully"})
        
    }).catch(err =>{
        // if it fails to dekete means status is 500 and response is error
        res.status(500).json({
            error : err
        })
    })
    
  });

module.exports = app