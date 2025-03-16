"use client";
import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import i18n from "i18next";
import { FaWhatsapp } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

import LocaleSwitcher from "../LocaleSwitcher/locale-switcher";
import Link from "next/link";
// import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "../LocaleSwitcher/locale-switcher-select";
import { useLocale, useTranslations } from "next-intl";

import { useSession } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

// import LocaleSwitcherSelect from "./locale-switcher-select";
import { locales } from "@/config";

const Icons = () => {
  const session = useSession();
  const t = useTranslations();
  const locale = useLocale();
  const [opneLeng, setOpneLeng] = useState(false);

  return (
    <div className="flex justify-center items-center">
      {session && session.status === "authenticated" ? (
        <Link
          className="bg-primary/30 hover:bg-primary m-1 w-8 h-8 p-1 rounded-full flex justify-center items-center"
          href="/api/auth/signout?callbackUrl=/"
        >
          <TbLogout size={20} className="text-black" />
        </Link>
      ) : (
        <>
          <button className="text-[14px] font-Title font-bold hidden mdl:block">
            <span className=" px-3 py-1 h-[30px] bg-primary/30 hover:bg-primary/90 rounded-md ">
              {t("link.btn")}
            </span>
          </button>
          <button className="bg-primary/30 hover:bg-primary m-1 w-8 h-8 p-1 rounded-full flex justify-center items-center mdl:hidden">
            <Link href="https://wa.me/963932661816">
              <FaWhatsapp size={20} />
            </Link>
          </button>
        </>
      )}

      <div className=" relative">
        <button
          className=" bg-primary/30 hover:bg-primary rounded-full m-1 mdl:m-2 w-8 h-8 p-1 flex justify-center items-center font-Title font-bold"
          onClick={() => setOpneLeng(!opneLeng)}
        >
          {/* <IoLanguageSharp size={17} /> */}
          <LocaleSwitcherSelect defaultValue={locale}>
            {locales.map((cur) => (
              <option key={cur} value={cur} className="">
                {cur.toUpperCase()}
              </option>
            ))}
          </LocaleSwitcherSelect>
        </button>
      </div>
    </div>
  );
};

export default Icons;
