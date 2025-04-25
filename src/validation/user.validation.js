import Joi from "joi";

export const userSchema = Joi.object({
  dateOfBirth: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
});