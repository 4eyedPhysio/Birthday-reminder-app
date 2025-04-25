const mongoose = require("mongoose");

// schema
const userShema = mongoose.Schema(
  {
    dateOfBirth: {
      type: Date,
      required: true, // changed 'require' to 'required'
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // corrected 'lowacase' to 'lowercase'
    },
  },
  {
    timestamps: true,
  }
);

// model
const User = mongoose.model("Users", userShema);

module.exports = { User };
