import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    address: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    serviceType: {
      type: String,
      enum: ["Dry Cleaning", "Polishing", "Both"],
      required: true,
    },
    pickupDate: { type: Date },
    notes: { type: String, trim: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

export default mongoose.model("Order", orderSchema);

