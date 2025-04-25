import { Router } from "express";
import * as userController from "../controller/user.controller.js";
import { userSchema } from "../validation/user.validation.js";
import { generateMiddleware } from "../middleware/route.middleware.js";

const userRoute = Router();

userRoute.get("/all", userController.getAllUsers);
userRoute.post(
  "/register",
  generateMiddleware(userSchema),
  userController.createUser
);

export default userRoute;