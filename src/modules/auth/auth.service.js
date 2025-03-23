import { AuthUtils } from "../../helper/bcryptHelper.js";
import { CustomError } from "../../helper/customError.js";
import { jwtUtils } from "../../helper/jwtHelper.js";
import prisma from "../../helper/prisma.js";

const logInUser = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (!user) {
    throw new Error("No user found");
  }
  const isMathedPassword = await AuthUtils.comparePassword(
    payload.password,
    user.password,
  );
  if (!isMathedPassword) {
    throw new Error("Incorrect Password");
  }
  delete user.password;
  delete user.email;
  delete user.name;
  const accessToken = jwtUtils.generateToken(
    user,
    process.env.JWT_ACCESS_SECRET,
    "15m",
  );
  const refreshToken = jwtUtils.generateToken(
    user,
    process.env.JWT_REFRESH_SECRET,
    "30d",
  );
  const result = {
    success: true,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
  return result;
};

const registerUser = async (payload) => {
  const hashedPassword = await AuthUtils.hashPassword(payload.password);
  payload.password = hashedPassword;
  const result = await prisma.user.create({ data: payload });
  //result.delete(password);
  delete result.password;
  return result;
};

export const authService = { logInUser, registerUser };
