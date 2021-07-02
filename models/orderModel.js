const mongoose =require('mongoose')

const orderSchema = mongoose.Schema(
  {
    email: {type: String, required: true},
    products: [
      {
        productId: {type: String, required: true},
        quantity: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
      }
    ],
    shippingAddress: { type: String, required: true },
    mobile_no : { type: String, required: true },
    paymentMethod: {type: String,required: true},
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;