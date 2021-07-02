const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
    
    
    voucher_code : {type: String, required : true},
    status: { type: String, required : true},
    discount_amount : { type: Number, required : true}
    
});

const voucher = new mongoose.model("voucher", voucherSchema);

module.exports = voucher;