import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary"
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
console.log("api key",process.env.CLOUDINARY_KEY);
 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "real_estate",
        allowedFormats: ["jpg", "png", "jpeg","webm"]
    }
})

export {storage}