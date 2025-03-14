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
  console.log("start delete***********************************************");

  try {
    await connectDB();
    await Portfolio.findByIdAndDelete(id);

    return new NextResponse("Portfolio Deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
