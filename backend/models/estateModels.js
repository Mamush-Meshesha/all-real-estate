import mongoose from "mongoose";

const estateSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  number_of_bedroom: { type: String },
  number_of_bathroom: { type: String },
  description: { type: String },
  image: { type: String },
  garage: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reference to User model
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Estate = mongoose.model("Estate", estateSchema);

export default Estate;
