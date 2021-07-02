//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Voucher = require('../../models/voucherModel')
const authenticateToken = require('../../middleware/authenticateuser')

//get the voucher code
app.get('/voucher', authenticateToken ,function(request, response){
    const code = request.query.voucher_code
    Voucher.find({code})
    //finding the complete voucher details using find query param to get all details present in database
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          response.status(200).json(doc);
        } else {
          response
            .status(404)
            .json({ message: "No valid entry found" });
        }
      })
      .catch(err => {
        console.log(err);
        //error if faile to get
        response.status(500).json({ error: err });
      });
});

module.exports = app