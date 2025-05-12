const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema} = require("./schema.js");

module.exports.isloggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in create listing");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) =>{
    if(req.session.redirectUrl){
       res.locals.redirectUrl = req.session.redirectUrl;
       delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you don't have access to edit");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if (error){
        let errMsg  = error.details.map((el) => el.message).join(",");
        let err = new Error(errMsg);
        err.status = 400;
        return next(err);
    }else{
        next();
    }
};

module.exports.validatReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        let err =  new Error(errMsg);
        err.status = 400;
        return  next(err);
    }else{
        next();
    };
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let listing = await Review.findById(reviewId);
    if(!listing.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you don't have access to delete");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
