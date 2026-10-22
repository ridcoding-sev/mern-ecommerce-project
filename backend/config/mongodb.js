import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });

        console.log("DB Connected");
    } catch (error) {
        console.log("MongoDB Error Name:", error.name);
        console.log("MongoDB Error Message:", error.message);
        console.log("MongoDB Error Reason:", error.reason);
    }
};

export default connectDB;
