import React from "react";
import wapp from "@/public/wapp.webp";
import Image from "next/image";
import Link from "next/link";
const WhatsAppBtn = () => {
  return (
    <div className=" fixed bottom-8 right-6 w-8">
      <Link href="https://wa.me/963956495873" className="">
        <Image src={wapp} alt="wapp" quality={100} className="w-full h-auto" />
      </Link>
    </div>
  );
};

export default WhatsAppBtn;
