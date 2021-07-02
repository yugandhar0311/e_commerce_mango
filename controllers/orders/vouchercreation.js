//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Voucher = require('../../models/voucherModel')
const authenticateToken = require('../../middleware/authenticateuser')

//applying voucher api
app.post("/voucher",authenticateToken, (req, res) => {

    const voucher = new Voucher({
        
        //this is the body params that needed to passed
        voucher_code : req.body.voucher_code,
        status: req.body.status,
        discount_amount : req.body.discount_amount
      
    });

    voucher
      .save()//saving the data into database
      .then(result => {
        
        res.status(201).json({
          message: "voucher code  created",
          createduser: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err//if fails catches error
        });
      });
    
})

module.exports = app