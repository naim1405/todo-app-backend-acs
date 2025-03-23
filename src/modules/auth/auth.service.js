import { AuthUtils } from "../../helper/bcryptHelper.js";
import prisma from "../../helper/prisma.js";

const logInUser = async (payload) => {
  console.log(payload);
  const result = "login servie";
  console.log(result);
  return result;
};

const registerUser = async (payload) => {
  const hashedPassword = await AuthUtils.hashPassword(payload.password);
  payload.password = hashedPassword;
  const result = await prisma.user.create({ data: payload });
  console.log(result);
  //result.delete(password);
  delete result.password;
  return result;
};

export const authService = { logInUser, registerUser };
