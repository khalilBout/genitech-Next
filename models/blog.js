import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Post Title ar"],
  },
  title_en: {
    type: String,
    required: [true, "Please Enter Post Title en"],
  },
  description: {
    type: String,
    required: [true, "Please enter Post description ar"],
  },
  description_en: {
    type: String,
    required: [true, "Please enter Post description en"],
  },
  mainImg: {
    type: String,
    required: [true],
  },
  // listImage: [{ type: String, required: [false] }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export default Blog;
