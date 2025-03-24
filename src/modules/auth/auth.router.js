import express from "express";
import { authController } from "./auth.controller.js";
import validateRequest from "../../middleware/validateRequest.js";
import { userValidationSchema } from "./auth.validation.js";

const router = express.Router();
router.post(
  "/login",
  validateRequest(userValidationSchema.userLoginSchema),
  authController.logInUser,
);
router.post(
  "/register",
  validateRequest(userValidationSchema.userRegisterSchema),
  authController.registerUser,
);
router.post("/refresh-token", authController.refreshToken);
router.post("/logout", authController.logOutUser);

export const authRoutes = router;
