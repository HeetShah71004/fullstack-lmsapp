import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected...`);
  } catch (error) {
    console.log("error occurred", error);
  }
};

export default connectDB;
