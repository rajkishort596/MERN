const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
  let reviewData = req.body.review;
  let newReview = new Review(reviewData);
  newReview.author = req.user._id;

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  console.log(newReview);
  // console.log(listing.reviews);
  req.flash("success", "Review added!");
  res.redirect(`/listings/${req.params.id}`);
};
module.exports.destroyReview = async (req, res, next) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted!");
  res.redirect(`/listings/${id}`);
};
