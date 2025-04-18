import catchAsync from "../../helper/catchAsync.js";
import { authService } from "./auth.service.js";

const logInUser = catchAsync(async (req, res, next) => {
  const result = await authService.logInUser(req.body);
  if (!result.success) {
    res.send(result);
  }
  const refreshToken = result.refreshToken;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  delete result.refreshToken;
  res.send(result);
});

const registerUser = catchAsync(async (req, res, next) => {
  const result = await authService.registerUser(req.body);
  res.send(result);
});

const refreshToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const result = await authService.refreshToken(refreshToken);
  res.send(result);
});
const logOutUser = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const result = await authService.logOutUser(refreshToken);
  res.clearCookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  res.send(result);
});

export const authController = {
  logInUser,
  registerUser,
  refreshToken,
  logOutUser,
};
