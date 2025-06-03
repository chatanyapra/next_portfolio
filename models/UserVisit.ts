import mongoose from "mongoose";

const UserVisitSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  ip: { type: String, required: true },
  latitude: { type: String, default: null },
  longitude: { type: String, default: null },
  city: { type: String },
  region: { type: String },
  country: { type: String },
  visitedAt: { type: Date, default: Date.now },
  ipType: { 
    type: String, 
    enum: ["real", "imaginary"], 
    required: true, 
    default: "imaginary" 
  },
});

export default mongoose.model("UserVisit", UserVisitSchema);
