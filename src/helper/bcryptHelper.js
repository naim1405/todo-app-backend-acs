import bcrypt from "bcrypt";

const hashPassword = async (plainPassword) => {
  const saltRound = 12;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
  return hashedPassword;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};

export const AuthUtils = { hashPassword, comparePassword };
