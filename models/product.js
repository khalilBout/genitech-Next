import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Title"],
  },
  category: {
    type: String,
    required: [true, "Please Enter product category"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
});

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
