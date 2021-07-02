//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.raw());
const mongoose = require("mongoose")
const Cart = require('../../models/cartModel')
const Product = require('../../models/productModel')

// //Authentication
// const basicAuth = require('express-basic-auth')
// const user_id = app.use(basicAuth({
//     users: { 'sajid@gmail.com': 'sajid001' }
// }))
const user_id = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpamF5a2FudGhAZ21haWwuY29tIiwiaWF0IjoxNjI1MjM0NDg4fQ.LxZWBA9odDvGc3JPpqpENNyUiwTMKasc-Ion5pbbAJM"

//add product to the cart
app.post("/cart", async (req, res) => {
    const { productId, quantity, name, price } = req.body;
  
    try {
        let cart = await Cart.findOne({ user_id });
        if (cart) {
            let itemIndex = cart.products.findIndex(p => p.productId == productId);
  
            if (itemIndex > -1) {
         
                let productItem = cart.products[itemIndex];
                productItem.quantity = quantity;
                cart.products[itemIndex] = productItem;
            } else {
                  cart.products.push({ productId, quantity, name, price });
              }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            const newCart = await Cart.create({
                user_id,
                products: [{ productId, quantity, name, price }]
              });
              return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
});

module.exports = app