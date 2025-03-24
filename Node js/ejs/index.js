const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

//?ejs: embedded javascript template
app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", path.join(__dirname, "/views")); // set the views directory

app.get("/", (req, res) => {
  res.render("home.ejs"); // render the home.ejs file
});
app.get("/about", (req, res) => {
  res.send("welcome to about section");
});
