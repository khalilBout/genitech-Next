import React from "react";
import Login from "@/components/Login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/?callbackUrl=/login");
  }
  return (
    <div className=" w-screen flex justify-center items-center ">
      <Login />
      {/* <h1> login page</h1> */}
    </div>
  );
};

export default page;
