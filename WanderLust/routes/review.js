const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Review Post Route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    const review = req.body.review;
    const newReview = await Review(review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log(newReview, newReview._id);
    req.flash("success", "Review added!");
    res.redirect(`/listings/${req.params.id}`);
  })
);

//Review Delete Route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
