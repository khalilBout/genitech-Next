"use client";
import { useTranslations } from "next-intl";
import Logo from "./Logo";
import Links from "./Links";
import Icons from "./Icons";
import MobileLink from "./MobileLink";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
// import LocaleSwitcher from "../LocaleSwitcher/locale-switcher";

const Navbar = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const LinkData = [
    {
      id: 1,
      name: t("link.home"),
      link: "/",
    },
    {
      id: 2,
      name: t("link.about"),
      link: "/#aboutUs",
    },
    {
      id: 3,
      name: t("link.services"),
      link: "/",
    },
    {
      id: 4,
      name: t("link.blog"),
      link: "/blog",
    },
    {
      id: 5,
      name: t("link.contact"),
      link: "/#contact",
    },
  ];

  return (
    <nav className="screenPadding fixed z-[100] top-0 left-0 right-0 bg-[#CEEBFD] h-[58px] mdl:h-[78px] flex justify-between items-center ">
      {/* logo sect  */}
      <Logo />
      <Links items={LinkData} />
      {open && <MobileLink items={LinkData} setOpen={setOpen} />}
      <div className="flex ">
        <Icons />
        <button className="mdl:hidden" onClick={() => setOpen(!open)}>
          <RiMenu4Line size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
