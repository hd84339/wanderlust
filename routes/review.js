const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require('../models/listing.js');
const {validatReview, isloggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//REVIEWS
//post route

router.post("/", 
    isloggedIn, 
    validatReview, 
    wrapAsync(reviewController.createReview));

//delete review route

router.delete("/:reviewId",
    isloggedIn,
    isReviewAuthor,
     wrapAsync(reviewController.deleteReview));




module.exports = router;