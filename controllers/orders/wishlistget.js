//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const wishget = require('../../models/wishlistModel')
const authenticateToken = require('../../middleware/authenticateuser')

//gets the wishlist content
app.get('/wishlist', authenticateToken ,function(request, response){
    const email = request.body.email;
    //using find method to fetch all details of wishlist present in the database
    wishget.find({email})
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
        //gives error if fails
        response.status(500).json({ error: err });
      });
});

module.exports = app