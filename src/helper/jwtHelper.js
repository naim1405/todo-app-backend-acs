import jwt from "jsonwebtoken";
const generateToken = (payload, secret, expiresIn) => {
  const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
  return token;
};

const verifyToken = (token, secret) => {
  const result = jwt.verify(token, secret);
  return result;
};

export const jwtUtils = { generateToken, verifyToken };
