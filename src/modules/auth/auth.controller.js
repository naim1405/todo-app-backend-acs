import catchAsync from "../../helper/catchAsync.js";
import { authService } from "./auth.service.js";

const logInUser = catchAsync(async (req, res, next) => {
  const result = await authService.logInUser(req.body);
  res.send(result);
});

const registerUser = catchAsync(async (req, res, next) => {
  const result = await authService.registerUser(req.body);
  res.send(result);
});

export const authController = { logInUser, registerUser };
