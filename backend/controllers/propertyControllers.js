import { v2 as cloudinary } from "cloudinary";
import Estate from "../models/estateModels.js";

const upload = async (req, res) => {
  try {
    const uploader = async (path) => await cloudinary.uploader.upload(path);
    const urls = [];

    for (const file of req.files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
    }

    res.status(200).json({ message: "success", data: urls });
    console.log(urls.secure_url);
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
};

const property = async (req, res) => {
  try {
    const {
      name,
      location,
      price,
      number_of_bedroom,
      number_of_bathroom,
      description,
      image,
      garage,
    } = req.body;

    const newProperty = await Estate.create({
      name,
      location,
      price,
      number_of_bedroom,
      number_of_bathroom,
      description,
      image,
      garage,
      user: req.user._id,
    })

    res.status(201).json(newProperty)
  } catch (error) {
    console.log(error)
  }
};

export  {upload,property};
