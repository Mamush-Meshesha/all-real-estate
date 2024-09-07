import express from "express";
import { register, login } from "../controllers/userControllers.js";
import { storage } from "../storage/storage.js";
import multer from "multer";
import { upload, property } from "../controllers/propertyControllers.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();
const uploads = multer({ storage });

router.get("/", async (req, res) => {
  res.json("hello there");
});

router.post("/user", register);
router.post("/auth", login);
router.post("/upload", authMiddleware, uploads.array("image"), upload);
router.post("/property",authMiddleware, property)

export default router;
