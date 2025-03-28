import express from "express";
import { getUsers, getUser, createUser } from "./db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("User ID:", userId);
  const user = await getUser(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

//  Global Error Handler (Still Needed for Custom Errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});
