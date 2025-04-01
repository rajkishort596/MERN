import express from "express";
import Book from "../models/book.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("index.ejs", { books });
});

export default router;
