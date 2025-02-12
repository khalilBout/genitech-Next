import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    ("MongoDB Connection Succesfful");
  } catch (error) {
    console.log(error);
  }
};
