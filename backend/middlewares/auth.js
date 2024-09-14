import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import Cookies from "cookies"; // Import cookies package if you're using it

export const authMiddleware = async (req, res, next) => {
  // If you're using cookies to store the token
  const cookies = new Cookies(req, res);
  const token = cookies.get("token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
