import { jwtUtils } from "../helper/jwtHelper";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorizaton;
    if (!token) {
      throw new Error("Unauthorized");
    }
    let verifiedUser = null;
    verifiedUser = jwtUtils.verifyToken(token, process.env.JWT_ACCESS_SECRET);
    if (!verifiedUser) {
      throw new Error("Unauthorized");
    }

    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
