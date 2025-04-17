const Listing = require("../models/listing.js");
module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};
module.exports.renderForm = async (req, res, next) => {
  res.render("listings/new.ejs");
};
module.exports.showListings = async (req, res, next) => {
  let { id } = req.params;

  const listing = await Listing.findById(req.params.id)
    .populate("owner") // populate owner of the listing
    .populate({
      path: "reviews",
      populate: {
        path: "author",
        model: "User", // optional if consistent
      },
    });
  // console.log(listing.reviews[0].author.username);
  if (!listing) {
    req.flash("error", "listing you requested for does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};
module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New listing Created!");
  res.redirect("/listings");
};
module.exports.editListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "listing you requested for does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};
module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "listing updated sucessfully!");
  res.redirect(`/listings/${id}`);
};
module.exports.destroyListing = async (req, res, next) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "listing deleted!");
  res.redirect("/listings");
};
