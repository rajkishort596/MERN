const express = require("express");
const app = express();
const port = 8080;

/* --------------------------------------
   Custom Middleware to check API access
   -------------------------------------- */
const checkAccess = (req, res, next) => {
  const { token } = req.query;

  // Allow access only if token is "giveaccess"
  if (token === "giveaccess") {
    next(); // continue to route handler
  } else {
    // Throw custom error if token is invalid/missing
    throw new Error("Access Denied");
  }
};

/* ------------------------------------------------
   Middleware for a specific route: "/raj"
   ------------------------------------------------ */
app.use("/raj", (req, res, next) => {
  console.log("Accessed /raj route");
  next(); // continue to next middleware or route handler
});

/* -------------------------------
   Route: Home route
   ------------------------------- */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* -------------------------------
   Route: /users
   ------------------------------- */
app.get("/users", (req, res) => {
  res.send("Hello From Users👋");
});

/* --------------------------------------------
   Protected Route: /api
   Uses checkAccess middleware for authorization
   -------------------------------------------- */
app.get("/api", checkAccess, (req, res) => {
  res.send("Secret Data");
});

/* -----------------------------------------------
   Catch-All Middleware for 404 (Not Found) Errors
   ----------------------------------------------- */
app.use((req, res, next) => {
  res.status(404).send("404! Page not found");
});

/* -------------------------------
   Start the server
   ------------------------------- */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
