import jwt  from "jsonwebtoken";
import User from "../models/userModels.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const secretkey = "mamushkey";
    const decoded = jwt.verify(token, secretkey);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
          res.status(401).json({ message: "Token is not valid" });

  }
};

export default authMiddleware;