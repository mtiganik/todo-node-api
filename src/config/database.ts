import mongoose from "mongoose";
import { config } from "dotenv";

config();

export async function connectDB(): Promise<void> {
  try{
    if(!process.env.MONGO_URI){
      throw new Error("MONGO_URI environment variable is not defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🚀 MongoDB connected");
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
}

/*
const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;

*/