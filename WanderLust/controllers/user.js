const User = require("../models/user.js");
module.exports.renderSignupForm = async (req, res, next) => {
  res.render("user/signup.ejs");
};
module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      email: email,
      username: username,
    });
    let registerdUser = await User.register(newUser, password);
    console.log(registerdUser);
    req.login(registerdUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to WanderLust👋");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};
module.exports.renderLoginForm = (req, res) => {
  res.render("user/login.ejs");
};
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to WanderLust !");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Logged Out!");
    res.redirect("/listings");
  });
};
