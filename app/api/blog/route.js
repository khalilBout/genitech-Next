import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    await connectDB();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    // التحقق من صحة البيانات قبل الحفظ
    // if (!body.title || !body.description || !body.mainImg) {
    //   return NextResponse.json(
    //     { error: "جميع الحقول المطلوبة يجب تعبئتها" },
    //     { status: 400 }
    //   );
    // }

    await connectDB();

    const newBlog = new Blog(body);

    await newBlog.save();

    return NextResponse.json({ message: "blog is created" }, { status: 201 });
  } catch (err) {
    console.error("error in create blog", err);

    return NextResponse.json(
      { error: "error in create blog", details: err.message },
      { status: 500 }
    );
  }
};
