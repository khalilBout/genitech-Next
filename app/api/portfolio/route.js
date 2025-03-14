import { NextResponse } from "next/server";
import Portfolio from "@/models/portfolio";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    await connectDB();
    const Portfolios = await Portfolio.find();
    return new NextResponse(JSON.stringify(Portfolios), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPortfolio = new Portfolio(body);
  try {
    await connectDB();
    await newPortfolio.save();
    return new NextResponse("new Portfolio has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
