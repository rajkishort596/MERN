const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.js");
const postsRoutes = require("./routes/posts.js");

//cookie-parser middleware.
app.use(cookieParser("secret-key"));

// Middleware to use routers
app.use("/users", userRoutes);
app.use("/posts", postsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Home Page");
});
// Setting Cookies
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "john_doe");
  res.send("Cookie has been set");
});

// Reading Cookies
app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  console.log(username);
  res.send(`Welcome back ${username}`);
});
//Deleting Cookies
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie has been cleared");
});
//Cokkies with options
app.get("/cookie-options", (req, res) => {
  res.cookie("token", "abc123", {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true, // Not accessible via JS
    secure: true, // Only over HTTPS
    sameSite: "strict", // CSRF protection
    path: "/", // Scope
  });
  res.send("cookie has been set with given options");
});

//Set Signed Cookies
app.get("/set-signed-cookie", (req, res) => {
  res.cookie("Nation", "Inida", { signed: true });
  res.send("signed Cookies set");
});
//Get Signed Cookies
app.get("/get-signed-cookie", (req, res) => {
  const Nation = req.signedCookies.Nation;
  console.log(Nation);
  res.send(`signed Cookies ${Nation}`);
});

// Use Case: Login System Example

app.get("/login", (req, res) => {
  // Suppose login is successful
  res.cookie("userId", "12345", { httpOnly: true });
  res.send("Logged in");
});

app.get("/dashboard", (req, res) => {
  if (req.cookies.userId) {
    res.send("Welcome to your dashboard");
  } else {
    res.send("Please login first");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
