const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null),
    price: Joi.number().required().min(0),
    country: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required().min(0).max(5),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
