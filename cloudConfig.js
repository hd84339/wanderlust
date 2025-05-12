require("dotenv").config();

const cloudConfig = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");


cloudConfig.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudConfig,
  params: {
    folder: "wanderlust_DEV", 
    allowed_formats: ["jpg", "png", "jpeg", "avif", "webp"],
},
});

module.exports = {cloudConfig, storage};