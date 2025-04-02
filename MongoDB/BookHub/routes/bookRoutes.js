import express from "express";
import Book from "../models/book.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("index.ejs", { books });
});
// New Book Form
router.get("/new", (req, res) => {
  res.render("new.ejs", { book: null });
});
// Create a New Book
router.post("/create", async (req, res) => {
  const { title, author, description, image } = req.body;
  // console.log(title, author, description, image);
  const newBook = Book({
    title: title,
    author: author,
    description: description,
    image: image,
  });
  await newBook.save();

  res.redirect("/books");
});
//Edit a Book
router.get("/edit/:id", async (req, res) => {
  const bookId = req.params.id;
  const book = await Book.findById(bookId);
  // console.log(bookId, book);
  res.render("new.ejs", { book });
});

//update a Book
router.put("/update/:id", async (req, res) => {
  const bookId = req.params.id;
  // console.log(bookId);
  const { title, author, description, image } = req.body;
  const updatedBook = { title, author, description, image };
  // console.log(updatedBook);
  await Book.findByIdAndUpdate(bookId, updatedBook, {
    new: true,
    runValidators: true,
  });
  res.redirect("/books");
});

//Delete a Book
router.delete("/delete/:id", async (req, res) => {
  const bookId = req.params.id;
  // console.log(bookId);
  await Book.findByIdAndDelete(bookId);
  res.redirect("/books");
});
export default router;
