const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use(express.static(path.join(__dirname, "/public/js"))); // serve the static files from the public directory
app.use(express.static(path.join(__dirname, "/public/css"))); // serve the static files from the public directory

//?ejs: embedded javascript template
app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", path.join(__dirname, "/views")); // set the views directory

app.get("/", (req, res) => {
  res.render("home.ejs"); // render the home.ejs file
});

app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  // res.render("home.ejs", { diceval: diceval });
  res.render("home.ejs", { diceval }); // render the home.ejs file with the dice value
});

app.get("/insta/:username", (req, res) => {
  const { username } = req.params;
  const data = require("./data.json");
  res.render("instagram.ejs", { data: data[username] }); // render the instagram.ejs file
});

app.get("/about", (req, res) => {
  res.send("welcome to about section");
});
