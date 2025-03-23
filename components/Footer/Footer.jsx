import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import logo from "@/public/logo.svg";
import footerBg from "@/public/footerBg.webp";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();
  const FooterLinks = [
    {
      title: t("footer.link.home"),
      link: "/#",
    },
    {
      title: t("footer.link.ourProduct"),
      link: "/#about",
    },
    {
      title: t("footer.link.order"),
      link: "/#contact",
    },
    {
      title: t("footer.link.downloadApp"),
      link: "/#blog",
    },
  ];
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg.src})` }}
      className="min-h-[360px] flex flex-col justify-around items-center overflow-hidden"
    >
      {/* info div  */}
      <div className="screenPadding my-6 font-Title flex flex-col mdl:flex-row justify-between items-center gap-2">
        {/* text div  */}
        <div className="w-full  mdl:w-[24%] flex flex-col">
          <div className="flex justify-center items-center ">
            <Image
              src={logo}
              alt="logo"
              className=" w-[80%] max-w-[160px] h-auto"
            />
          </div>
          <p className="text-slate-200 text-[12px] text-center py-4">
            {t("footer.desc")}
          </p>
        </div>
        {/* link div  */}
        <div className="w-full mdl:w-[46%] flex justify-center gap-12 text-slate-200">
          <div className="">
            <h2 className="text-[18px] font-bold py-2 ">
              {t("footer.service.title")}
            </h2>
            <ul className="text-[14px] relative">
              <li className="my-1 ">
                <LocalizedLink href="/mobileapp" className="z-50">
                  {t("footer.service.srv-1")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/webapp" className="z-50">
                  {t("footer.service.srv-2")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/deskapp" className="z-50">
                  {t("footer.service.srv-3")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/design" className="z-50">
                  {t("footer.service.srv-4")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/design" className="z-50">
                  {t("footer.service.srv-5")}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-[18px] font-bold py-2 ">
              {t("footer.links.title")}
            </h2>
            <ul className="text-[14px] relative">
              <li className="my-1">
                <LocalizedLink href="/" className="z-50">
                  {t("footer.links.link-1")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/" className="z-50">
                  {t("footer.links.link-2")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <LocalizedLink href="/blog" className="z-50">
                  {t("footer.links.link-3")}
                </LocalizedLink>
              </li>
              <li className="my-1">
                <a href="/#contact" className="z-50">
                  {t("footer.links.link-4")}
                </a>
              </li>
              <li className="my-1">
                <LocalizedLink href="/privacy" className="z-50">
                  {t("footer.links.link-5")}
                </LocalizedLink>
              </li>
            </ul>
          </div>
        </div>
        {/* contact div  */}
        <div className="w-full mdl:w-[24%] flex flex-col items-center text-slate-200">
          <h2 className="text-[18px] font-bold py-2 ">
            {t("footer.contact.title")}
          </h2>
          <ul className="text-[14px] ">
            <li className="my-1 flex gap-2 items-start">
              <FaLocationDot className="text-primary" size={18} />
              <h2 href="/" className="select-text">
                {t("footer.contact.add")}
              </h2>
            </li>
            <li className="my-1 flex gap-2 items-center">
              <FaPhoneAlt className="text-primary " size={18} />
              <h2 dir="ltr" className="select-text">
                {t("footer.contact.phone")}
              </h2>
            </li>
            <li className="my-1 flex gap-2 items-center">
              <MdMarkEmailRead className="text-primary " size={18} />
              <h2 className="select-text">{t("footer.contact.email")}</h2>
            </li>
          </ul>
        </div>
      </div>
      {/* icons div   */}
      <div
        dir="ltr"
        className="screenPadding w-full bg-primary py-4 mdl:h-[45px] flex flex-col mdl:flex-row justify-center mdl:justify-between items-center "
      >
        <div className="flex justify-center items-center gap-4 text-black">
          <a href="" className="">
            <FaFacebook />
          </a>
          <a href="" className="">
            <FaInstagram />
          </a>
          <a href="" className="">
            <FaLinkedin />
          </a>
          <a href="" className="">
            <FaFacebook />
          </a>
        </div>
        <div className="mdl:hidden w-[70%] h-[1px] bg-black my-2"></div>
        <p className="text-[15px] text-black text-center">
          ©2025 <span className="font-bold">GeniTech</span>, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
