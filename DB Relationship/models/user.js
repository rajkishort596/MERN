// Import the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Establish the connection to the MongoDB database
main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Async function to connect to the MongoDB database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Define a schema for the User collection
const userSchema = mongoose.Schema({
  // Username is required and must be a string
  username: {
    type: String,
    required: true,
  },
  // Address is an array of objects with location and city fields
  address: [
    {
      // _id is set to false to prevent automatic generation of _id for subdocuments
      _id: false,
      location: String,
      city: String,
    },
  ],
});

// Create a User model using the defined schema
const User = mongoose.model("User", userSchema);

// Function to create and save a new user
const addUser = async () => {
  // Create a new user with one address
  let user1 = new User({
    username: "sherlockholmes",
    address: [
      {
        location: "221B Baker Street",
        city: "London",
      },
    ],
  });

  // Add an additional address to the user's address array
  user1.address.push({ location: "P32 wallstreet", city: "London" });

  // Save the user to the database and log the result
  let result = await user1.save();
  console.log(result);
};

// Call the function to add a new user
addUser();
