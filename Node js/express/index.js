const express = require("express");
const app = express();

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

// app.use((req, res) => {
//   console.log("A request was made to the server !");
//   console.log(req.path);
//   res.send("Hello root !");
// });

// Define the route for the root URL of the website
app.get("/", (req, res) => {
  res.send("Hello root !");
});

app.get("/about", (req, res) => {
  res.send("Hello about !");
});
// app.get("/search", (req, res) => {
//   res.send("Hello search !");
// });
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  res.send(`You searched for ${q}`);
});

app.get("*", (req, res) => {
  res.send("The path is not found !");
});

app.get("/:username", (req, res) => {
  res.send(`Hello ${req.params.username} !`);
});
