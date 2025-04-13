const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");

router.get(
  "/signup",
  wrapAsync(async (req, res, next) => {
    res.render("user/signup.ejs");
  })
);

router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({
        email: email,
        username: username,
      });
      let registerdUser = await User.register(newUser, password);
      console.log(registerdUser);
      req.flash("success", "Welcome to WanderLust👋");
      res.redirect("/listings");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to WanderLust !");
    res.redirect("/listings");
  }
);

module.exports = router;
