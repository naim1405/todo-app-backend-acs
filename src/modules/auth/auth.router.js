import express from "express";
import { authController } from "./auth.controller.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("auth working");
});

router.post("/login", authController.logInUser);
router.post("/register", authController.registerUser);
router.post("/refresh-token", authController.refreshToken);
router.post("/logout", authController.logOutUser);

export const authRoutes = router;
