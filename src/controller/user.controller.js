const { User } = require("../database/model/user.schema.js");

const createUser = async (req, res) => {
  const { dateOfBirth, username, email } = req.body;
  try {
    const newUser = new User({
      dateOfBirth,
      username,
      email,
    });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createUser, getAllUsers };
