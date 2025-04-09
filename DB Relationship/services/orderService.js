// services/orderService.js
const Order = require("../models/order");

const insertOrders = async (orderArray) => {
  return await Order.insertMany(orderArray);
};

const getOrderByItem = async (itemName) => {
  return await Order.findOne({ item: itemName });
};

module.exports = {
  insertOrders,
  getOrderByItem,
};
