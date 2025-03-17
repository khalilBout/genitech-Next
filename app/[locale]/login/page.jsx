import React from "react";
import Login from "@/components/Login/Login";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  // if (session) {
  //   // التحقق مما إذا كان المستخدم أدمن أم لا
  //   if (session.user.role !== "admin") {
  //     redirect("/"); // توجيه الأدمن إلى لوحة التحكم
  //   }
  // }
  return (
    <div className="screenPadding w-screen flex justify-center items-center ">
      <Login />
    </div>
  );
};

export default page;
