import mongoose from "mongoose";
import adminGenerator from "../utils/adminGenerator.js";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      writeConcern: { w: 'majority' }
    });
    await adminGenerator();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message || "Error connecting to MongoDB");
    process.exit(1);
  }
}
