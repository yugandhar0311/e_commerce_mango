const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    
    product_name: {type: String, required : true},
    email : {type: String, required : true},
    category: { type: String, required : true}
    
});

const Wishlist = new mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;