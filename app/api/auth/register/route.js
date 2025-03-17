import User from "@/models/user";
import connectDB from "@/utilit/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
  console.log("satart rejeter**********************");
  const { name, email, password } = await request.json();
  console.log("data:", name, email, password);

  //check if user already exists
  const user = await User.findOne({ email });

  // if (user) {
  //   return NextResponse.json({ error: "User already exists" }, { status: 400 });
  // }

  // hashed Password with leb of script (bcrypt)
  const hashedPassword = await bcrypt.hash(password, 5);

  // creat user with model User
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // save user in data base and return response with mesg of success or catch error
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
