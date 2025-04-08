// Import Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB
main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Async function to establish connection to the MongoDB database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Define schema for the Order collection
const orderSchema = mongoose.Schema({
  // Item name (required field)
  item: {
    type: String,
    required: true,
  },
  // Price of the item (required field)
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Create Order model from the schema
const Order = mongoose.model("Order", orderSchema);

// Define schema for the Customer collection
const customerSchema = mongoose.Schema({
  // Customer name (required field)
  name: {
    type: String,
    required: true,
  },
  // Array of order references using ObjectId
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Order, // Reference to the Order model
    },
  ],
});

// Create Customer model from the schema
const Customer = mongoose.model("Customer", customerSchema);

// Function to insert multiple orders into the database
const insertOrder = async () => {
  let result = await Order.insertMany([
    { item: "samosa", price: 12 },
    { item: "chips", price: 10 },
    { item: "chocolate", price: 40 },
  ]);
  console.log(result);
};
insertOrder();

// Function to create a new customer and link some orders
const addCustomer = async () => {
  const customer1 = new Customer({
    name: "Rahul kumar", // New customer name
  });

  // Find specific orders from the database
  let order1 = await Order.findOne({ item: "chips" });
  let order2 = await Order.findOne({ item: "chocolate" });

  // Add order references to the customer's orders array
  customer1.orders.push(order1);
  customer1.orders.push(order2);

  // Save the customer to the database
  let result = await customer1.save();
  console.log(result);
};
addCustomer();

// Function to fetch customers and populate the details of their orders
const findCustomers = async () => {
  // Find all customers and replace order IDs with full order documents
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]); // Display the first customer with populated orders
};

findCustomers();
