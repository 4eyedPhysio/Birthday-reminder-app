const { User } = require("../database/model/user.schema.js");

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers };
