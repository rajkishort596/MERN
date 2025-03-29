import express from "express";
import methodOverride from "method-override";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "./db.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data
app.use(methodOverride("_method")); // Use method-override

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
//show Route
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.render("users.ejs", { users });
});
//create form Route
app.get("/users/create", async (req, res) => {
  res.render("create.ejs");
});
//show single user Route
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  // console.log("User ID:", userId);
  const user = await getUser(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.render("user.ejs", { user });
});
//create Route
app.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await createUser(username, email, password);
  // console.log(username, email, password);
  res.redirect("/users");
});
//edit Route
app.get("/users/edit/:id", async (req, res) => {
  const userId = req.params.id;
  // console.log("User ID:", userId);
  const user = await getUser(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.render("edit.ejs", { user, error: "" });
});
//update Route
app.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { username: Username, email: Email, password: UserPassword } = req.body;
  const user = await getUser(userId);
  // console.log(userId, Username, Email, UserPassword);
  // console.log(user);
  if (user.password !== UserPassword) {
    let errMsg = `Wrong passwrod Please try again!`;
    return res.render("edit.ejs", { user: user, error: errMsg });
  } else {
    updateUser(userId, Username, Email);
    res.redirect("/users");
  }
});
//delete Route
app.delete("/users/delete/:id", (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  deleteUser(userId);
  res.redirect("/users");
});
//  Global Error Handler (Still Needed for Custom Errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});
