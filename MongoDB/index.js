const mongoose = require("mongoose"); // Import mongoose library

// Establish connection to MongoDB
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Defining a Schema for the User collection
const userSchema = new mongoose.Schema({
  name: String, // User's name
  email: String, // User's email
  age: Number, // User's age
  isAvenger: {
    type: Boolean,
    default: false, // Default value is false
  },
});

// Creating a model (User) based on the schema
const User = mongoose.model("User", userSchema);

// Creating an instance (document) of User model
const user2 = new User({
  name: "eve",
  email: "eve@yahoo.in",
  age: 48,
});

// Another instance of the User model
const user3 = new User({
  name: "eve",
  email: "eve@yahoo.in",
  age: 48,
});

// Saving the created document into the MongoDB database
user3
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

// Inserting multiple documents into the User collection
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 50 },
  { name: "Bruce", email: "bruce@gmail.com", age: 47 },
  { name: "Peter", email: "peter@gmail.com", age: 30 },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// Finding all users with age greater than 47
User.find({ age: { $gt: 47 } })
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

// Finding a single user by email
User.findOne({ email: "peter@gmail.com" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Finding a user by their unique ID (replace with a valid ObjectId)
User.findById("67ea351a13bcd412808b38bc")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Updating a single user document where name is 'Bruce'
User.updateOne({ name: "Bruce" }, { name: "Bruce Banner", age: 35 })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Updating multiple users with age 48 to set isAvenger to false
User.updateMany({ age: 48 }, { isAvenger: false })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Updating a single user and returning the old document
User.findOneAndUpdate({ name: "Tony" }, { name: "Tony Stark" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Updating a single user and returning the new document after update
User.findOneAndUpdate(
  { name: "Peter" },
  { name: "Peter Parker" },
  { new: true } // This option returns the updated document
)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Deleting a single user document where name is 'atish'
User.deleteOne({ name: "atish" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Finding and deleting a single user by email
User.findOneAndDelete({ email: "Mishra@gmail.com" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
