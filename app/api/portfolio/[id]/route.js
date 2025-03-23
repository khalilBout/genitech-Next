import Portfolio from "@/models/portfolio";
import connectDB from "@/utilit/connectDB";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const PortfolioID = params.id;
  try {
    const portfolio = await Portfolio.findById(PortfolioID);
    return new NextResponse(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Portfolio.findByIdAndDelete(id);

    return new NextResponse("Portfolio Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const {
    title,
    title_en,
    description,
    description_en,
    mainImg,
    category,
    listImage,
  } = await request.json();

  try {
    await connectDB();
    await Portfolio.findByIdAndUpdate(id, {
      title: title,
      title_en: title_en,
      description: description,
      description_en: description_en,
      mainImg: mainImg,
      category: category,
      listImage: listImage,
    });
    return new NextResponse("Portfolio updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
