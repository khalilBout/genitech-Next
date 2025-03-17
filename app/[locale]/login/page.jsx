import React from "react";
import Login from "@/components/Login/Login";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="screenPadding w-screen flex justify-center items-center ">
      <Login />
    </div>
  );
};

export default page;
