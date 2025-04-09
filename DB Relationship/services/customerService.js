// services/customerService.js
const Customer = require("../models/customer");

const createCustomer = async (name, orderIds = []) => {
  const customer = new Customer({ name, orders: orderIds });
  return await customer.save();
};

const getAllCustomers = async () => {
  return await Customer.find({}).populate("orders");
};

const deleteCustomerById = async (id) => {
  return await Customer.findByIdAndDelete(id); // triggers post middleware
};

module.exports = {
  createCustomer,
  getAllCustomers,
  deleteCustomerById,
};
