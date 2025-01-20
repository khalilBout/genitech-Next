import React from "react";
import LocaleSwitcher from "../LocaleSwitcher/locale-switcher";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const linkKeys = ["home", "serves", "contact"];
  // const links = [
  //   {
  //     name: "home",
  //     url: "/",
  //   },
  //   {
  //     name: "Serves",
  //     url: "/serves",
  //   },
  //   {
  //     name: "Contact",
  //     url: "/contact",
  //   },
  // ];
  return (
    <div className="flex">
      <ul className=" grow flex gap-4 ">
        {linkKeys.map((elm, ind) => (
          <li key={ind}>
            <Link href={t(`LinksData.${elm}.href`)}>
              {" "}
              {t(`LinksData.${elm}.title`)}{" "}
            </Link>
          </li>
        ))}
      </ul>
      <div className=" relative">
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
