import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
  title_en: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
  category: [
    {
      type: String,
      required: [true],
    },
  ],
  description: {
    type: String,
    required: [true, "Please enter Portfolio description"],
  },
  description_en: {
    type: String,
    required: [true, "Please enter Portfolio description"],
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
});

const Portfolio =
  mongoose.models.Portfolios || mongoose.model("Portfolios", PortfolioSchema);

export default Portfolio;
