/*
 Reference: Mongoose Schema Types Documentation
 https://mongoosejs.com/docs/schematypes.html

 This link provides detailed information about various schema types, 
 validation options, default values, custom validators, and other 
 useful configurations for defining Mongoose schemas.
*/

const mongoose = require("mongoose");

// Establish connection to MongoDB
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

// Function to connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Define a Schema for the 'books' collection
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
    maxLength: 20, // Maximum length is 20 characters
    trim: true, // Removes leading and trailing whitespace
  },
  author: {
    type: String,
    default: "Munshi Premchand", // Default author name if not provided
  },
  price: {
    type: Number,
    min: 1, // Minimum price value allowed
    max: 1000, // Maximum price value allowed
    default: 100, // Default price if not provided
    validate: {
      validator: (v) => v % 1 === 0, // Ensures the price is a whole number
      message: "Price must be an integer", // Error message if validation fails
    },
  },
});

// Create a Mongoose model named 'Book' for the 'books' collection
const Book = mongoose.model("Book", bookSchema);

// Uncomment these blocks to create new book entries for testing

// Case 1: Valid book entry
// const newBook = new Book({
//   title: "Godaan",
//   author: "Munshi Premchand",
//   price: 399,
// });

// Case 2: Invalid price (negative value, fails validation)
// const newBook = new Book({
//   title: "Nirmala",
//   author: "Munshi Premchand",
//   price: -200, // Will trigger validation error
// });

// Case 3: Title exceeds maxLength (fails validation)
// const newBook = new Book({
//   title: "Karambhoomiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", // Exceeds 20 characters
//   author: "Munshi Premchand",
//   price: 299,
// });

// Case 4: Valid entry
// const newBook = new Book({
//   title: "Karambhoomi",
//   author: "Munshi Premchand",
//   price: 299,
// });

// Case 5: Trim test (extra spaces will be removed automatically)
// const newBook = new Book({
//   title: "           Kaayakalp          ", // Leading and trailing spaces will be trimmed
//   price: 199,
// });

// Case 6: Default author will be applied
// const newBook = new Book({
//   title: "Gabhan",
//   price: 151, // Author will be "Munshi Premchand" by default
// });

// Case 7: Another valid entry
// const newBook = new Book({
//   title: "Rangbhoomi",
//   price: 349,
// });

// Save the book document to MongoDB
// newBook
//   .save()
//   .then((book) => {
//     console.log(book);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Insert multiple books into the collection
Book.insertMany([
  { title: "Mansarovar", price: 399 }, // Default author will be applied
  { title: "Pratigya", price: 151 },
  { title: "Prema", price: 299 },
])
  .then((res) => {
    console.log(res); // Logs the inserted books
  })
  .catch((err) => {
    console.log(err); // Logs any errors if insertion fails
  });

// Updates price without validation (may allow invalid values)
Book.updateOne({ title: "Godaan" }, { price: -500 })
  .then((book) => console.log(book))
  .catch((err) => console.log(err));

// Updates price with validation (throws error if invalid)
Book.updateOne({ title: "Godaan" }, { price: -500 }, { runValidators: true })
  .then((book) => console.log(book))
  .catch((err) => console.log(err)); // Error if `min: 1` is set in schema
