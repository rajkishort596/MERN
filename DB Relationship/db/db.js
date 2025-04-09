// Import Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", err);
  }
};

module.exports = connectDB;
