// models/order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Order", orderSchema);
