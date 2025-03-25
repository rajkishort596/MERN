const express = require("express");
const app = express();

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
//middleware to parse the request body
app.use(express.json()); // Parse JSON data from requests
app.use(express.urlencoded({ extended: true })); // Parse form data

//handling get requests
app.get("/login", (req, res) => {
  const { name, password } = req.query; //destructuring from req.query
  console.log(req.query);
  res.send(`welcome ${name}`); // Send a response to the client
});

//handling post requests
app.post("/login", (req, res) => {
  const { name, password } = req.body; //destructuring from req.body
  console.log(req.body);
  res.send(`welcome ${name}`); // Send a response to the client
});
