import mongoose from "mongoose";

export const connectToDatabase = async (MONGODB_URL) => {
  try {
    if (!MONGODB_URL) {
      throw new Error("MongoDB connection string is missing.");
    }

    const connection = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};
