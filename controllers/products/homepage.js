//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const homeproducts = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser')

//Homepage products
app.get("/homepage", authenticateToken, async (req, res, next) => {
    //get products on homepage using find ({})
    homeproducts.find({}).exec().then(result => {
        res.status(200).json(result)
    }).catch(err =>{
        res.status(500).json({
            error : err
        })
    })

  });

module.exports = app