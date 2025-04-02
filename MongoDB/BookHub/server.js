import express, { urlencoded } from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
const app = express();

// Convert import.meta.url to __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Use method-override to support DELETE and PUT methods via POST
app.use(methodOverride("_method"));

// Middleware to parse URL-encoded form data (normal form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));

// Routes
app.use("/books", bookRouter);

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BookHub");
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
