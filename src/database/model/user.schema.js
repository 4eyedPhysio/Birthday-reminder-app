import mongoose from "mongoose";

// schema
const userShema = mongoose.Schema(
  {
    dateOfBirth: {
      type: Date,
      require: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowacase: true,
    },
  },
  {
    timestamps: true,
  }
);

// model
export const User = mongoose.model("Users", userShema);