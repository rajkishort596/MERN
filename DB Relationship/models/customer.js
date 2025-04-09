// models/customer.js
const mongoose = require("mongoose");
const Order = require("./order");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// Middleware to run after deleting a customer
customerSchema.post("findOneAndDelete", async (customer) => {
  console.log("🧹 Post-delete middleware triggered");

  if (customer && customer.orders.length) {
    const deletedOrders = await Order.deleteMany({
      _id: { $in: customer.orders }, // ✅ Correct field
    });
    console.log("🗑 Deleted associated orders:", deletedOrders);
  }
});

module.exports = mongoose.model("Customer", customerSchema);
