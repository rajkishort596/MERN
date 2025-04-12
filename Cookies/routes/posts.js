// routes/users.js
const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("List of Posts");
});

router.get("/:id", (req, res) => {
  res.send(`Post with ID: ${req.params.id}`);
});

module.exports = router;
