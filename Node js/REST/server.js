const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

const { v4: uuidv4 } = require("uuid");

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
//Posts data
let data = [
  {
    id: uuidv4(),
    username: "Atish",
    content: "Hello there i just started learning css",
  },
  {
    id: uuidv4(),
    username: "Rajkishor",
    content: "Hello there i just started learning nodejs",
  },
  {
    id: uuidv4(),
    username: "Shubham",
    content: "Hello there i am a full stack developer",
  },
];

app.set("view engine", "ejs"); // Set the view engine to ejs
app.use(express.static(path.join(__dirname, "public"))); // Set the folder for static files
//Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Used to parse JSON bodies
app.use(methodOverride("_method")); // Use method-override

/*-----------------------------------Restful API Routes-----------------------------------------*/

//Home Route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts: data });
});
//New Post Route
app.get("/posts/new", (req, res) => {
  res.render("New.ejs");
});
//Create Post Route
app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  const newPost = { id: uuidv4(), username, content }; // Generate a new UUID
  data.push(newPost);
  res.redirect("/posts"); // Redirect instead of re-rendering
});
//Show Post Route
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = data.find((p) => p.id === id);
  res.render("show.ejs", { post });
});

//Edit Form Route
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = data.find((p) => p.id === id);
  res.render("Edit.ejs", { post });
});
//Update Post Route
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const post = data.find((p) => p.id === id);
  post.content = newContent;
  res.redirect("/posts");
});
//Delete Post Route
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((p) => p.id !== id);
  res.redirect("/posts");
});
