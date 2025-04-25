const express = require("express");
const userController = require("../controller/user.controller.js");
const { userSchema } = require("../validation/user.validation.js");
const { generateMiddleware } = require("../middleware/route.middleware.js");

const userRoute = express.Router();

userRoute.get("/all", userController.getAllUsers);
userRoute.post(
  "/register",
  generateMiddleware(userSchema),
  userController.createUser
);

module.exports = userRoute;
