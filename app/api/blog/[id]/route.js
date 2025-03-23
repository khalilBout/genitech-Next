import Blog from "@/models/blog";
import connectDB from "@/utilit/connectDB";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const BlogID = params.id;
  try {
    const blog = await Blog.findById(BlogID);
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Blog.findByIdAndDelete(id);

    return new NextResponse("Blog Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { title, title_en, description, description_en, mainImg } =
    await request.json();

  try {
    await connectDB();
    await Blog.findByIdAndUpdate(id, {
      title: title,
      title_en: title_en,
      description: description,
      description_en: description_en,
      mainImg: mainImg,
    });
    return new NextResponse("Blod updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
