import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_SECRET_API_KEY
});

try {
    await cloudinary.api.ping();
    console.log("Cloudinary Connected");
} catch (error) {
    console.error("Cloudinary connection failed:", error.message);
}


};

export default connectCloudinary;
