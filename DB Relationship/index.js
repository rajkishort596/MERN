// index.js
const connectDB = require("./db/db");
const { insertOrders, getOrderByItem } = require("./services/orderService");
const {
  createCustomer,
  getAllCustomers,
  deleteCustomerById,
} = require("./services/customerService");

const run = async () => {
  await connectDB();

  //   Example: Insert orders
  const orders = await insertOrders([
    { item: "samosa", price: 12 },
    { item: "chips", price: 10 },
    { item: "chocolate", price: 40 },
  ]);
  console.log("Inserted orders:", orders);

  // Example: Create customer with order reference
  const chipsOrder = await getOrderByItem("chips");
  const samosaOrder = await getOrderByItem("samosa");
  const customer = await createCustomer("Rakesh Kumar", [
    chipsOrder._id,
    samosaOrder._id,
  ]);
  console.log("Customer created:", customer);

  // Example: Get all customers
  const customers = await getAllCustomers();
  console.log("Customers:", customers);

  //   Example: Delete a customer
  const deleted = await deleteCustomerById("67f67b19b316c46405eb5625");
  console.log("Deleted Customer:", deleted);
};

run();
