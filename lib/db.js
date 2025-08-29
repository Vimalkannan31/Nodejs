import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected..");
  } catch (err) {
    console.error(err.message);
  }
};

export default ConnectDB;
