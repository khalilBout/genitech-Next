"use client";
import React from "react";
import { useTranslations } from "next-intl";

import mobile from "@/public/iconLinks/mobil.png";
import desk from "@/public/iconLinks/desk.png";
import web from "@/public/iconLinks/web.png";
import design from "@/public/iconLinks/dsng.png";
import Image from "next/image";
import LocalizedLink from "../Ui/LocalizedLink";
const LinkService = () => {
  const t = useTranslations();

  return (
    <div className=" my-2 flex justify-center items-center">
      <ul className=" w-[80%] flex flex-col mdl:flex-row justify-center items-center gap-2 mdl:gap-6 font-Title text-slate-950 font-bold">
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <Image
            src={mobile}
            alt=""
            className=" hidden mdl:block w-auto h-[40px]"
          />
          <LocalizedLink
            href="/mobileapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.mobileapp")}
          </LocalizedLink>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <Image
            src={desk}
            alt=""
            className="hidden mdl:block w-auto h-[40px]"
          />
          <LocalizedLink
            href="/deskapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.deskapp")}
          </LocalizedLink>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <Image
            src={web}
            alt=""
            className="hidden mdl:block w-auto h-[40px]"
          />
          <LocalizedLink
            href="/webapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.webapp")}
          </LocalizedLink>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <Image
            src={design}
            alt=""
            className="hidden mdl:block w-auto h-[40px]"
          />
          <LocalizedLink
            href="/design"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.design")}
          </LocalizedLink>
        </li>
      </ul>
    </div>
  );
};

export default LinkService;
