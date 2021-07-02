const mongoose =require('mongoose')

const reviewSchema = mongoose.Schema(
    {
      product_name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      email: { type: String, required: true}
    },
    {
      timestamps: true,
    }
  )

module.exports = {reviewSchema}