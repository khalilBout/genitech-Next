import React from "react";
import wapp from "@/public/wapp.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhatsAppBtn = () => {
  const t = useTranslations();

  return (
    <a
      dir="rtl"
      href="https://wa.me/963956495873"
      className=" group fixed z-50 bottom-8 right-6 w-[120px] mdl:w-[160px] flex justify-center items-center gap-2 font-Title font-semibold"
    >
      <Image
        src={wapp}
        alt="wapp"
        quality={100}
        className="w-7 mdl:w-8 h-auto group-hover:scale-105"
      />
      <span className=" rounded-full bg-black text-slate-200 px-2 py-1 text-[12px] mdl:text-[13px] text-center group-hover:scale-105  ">
        {t("hero.whatsapp")}
      </span>
    </a>
  );
};

export default WhatsAppBtn;
