import React from "react";
import wapp from "@/public/wapp.png";
import Image from "next/image";
import Link from "next/link";
const WhatsAppBtn = () => {
  return (
    <div className=" fixed bottom-12 right-8">
      <Link href="/" className="">
        <Image src={wapp} alt="wapp" className="w-full h-auto" />
      </Link>
    </div>
  );
};

export default WhatsAppBtn;
