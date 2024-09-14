import express from "express";
import { register, login } from "../controllers/userControllers.js";
import { storage } from "../storage/storage.js";
import multer from "multer";
import { upload, property, getProperty, getdetail } from "../controllers/propertyControllers.js";
import {authMiddleware} from "../middlewares/auth.js";

const router = express.Router();
const uploads = multer({ storage });


router.post("/user", register);
router.post("/auth", login);
router.post("/upload",  uploads.array("image"), upload);
router.post("/property", authMiddleware, property)
router.get("/prop", getProperty)
router.get("/property/:id", getdetail)
export default router;
