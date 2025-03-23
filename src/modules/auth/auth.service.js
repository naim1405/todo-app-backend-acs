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
  const storeResult = await prisma.refresh_Token.create({
    data: {
      token: refreshToken,
      isActive: true,
    },
  });
  if (!storeResult) {
    throw new Error("Unknown Error");
  }
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

const refreshToken = async (refreshToken) => {
  const isActive = await prisma.refresh_Token.findFirst({
    where: {
      token: refreshToken,
    },
  });
  if (!isActive || !isActive.isActive) {
    throw new Error("Expired Refresh Token");
  }
  let verifiedToken = null;
  try {
    verifiedToken = jwtUtils.verifyToken(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
    );
  } catch (err) {
    throw new Error("Invalid Refresh Token");
  }
  const { id } = verifiedToken;
  const isUserExist = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!isUserExist) {
    throw new Error("User doesn't exists!");
  }

  const newAccessToken = jwtUtils.generateToken(
    { id: id },
    process.env.JWT_ACCESS_SECRET,
    "15m",
  );
  return { success: true, accessToken: newAccessToken };
};

export const authService = { logInUser, registerUser, refreshToken };
