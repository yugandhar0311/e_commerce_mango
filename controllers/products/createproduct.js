//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

// create a product to products collections
app.post('/createProduct', authenticateToken ,(req, res) => {
    const product = new Product({
        product_name: req.body.product_name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        price : req.body.price,
        countInStock: req.body.countInStock
    });

    // adding that product to the products collections 
    product
      .save()
      .then(result => {
        // console.log(result);
        res.status(201).json({
          message: "product is created",
          createdUser: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
})

// exporting the api
module.exports = app