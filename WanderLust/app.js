const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

//Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res, next) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Route
app.get(
  "/listings/new",
  wrapAsync(async (req, res, next) => {
    res.render("listings/new.ejs");
  })
);

//Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  })
);

//Create Route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);

    await newListing.save();
    res.redirect("/listings");
  })
);

//Edit Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);

//Review Post Route
app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    const review = req.body.review;
    const newReview = await Review(review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log(newReview, newReview._id);
    res.redirect(`/listings/${req.params.id}`);
  })
);

//Review Delete Route
app.delete(
  "/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  })
);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  console.log(err);
  res.status(status).render("error.ejs", { message });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
