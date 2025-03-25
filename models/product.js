import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter product Title"],
    },
    title_en: {
      type: String,
      required: [true, "Please Enter product Title"],
    },
    category: [
      {
        type: String,
        required: [true],
      },
    ],
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    description_en: {
      type: String,
      required: [true, "Please enter product description"],
    },
    mainImg: {
      type: String,
      required: [true],
    },
    listImage: [{ type: String, required: [false] }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
