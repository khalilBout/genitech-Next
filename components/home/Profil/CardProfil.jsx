"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

const CardProfil = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  // const lng = cookies.get("i18next") || "ar";

  return (
    <div className=" relative m-4 flex max-w-[220px] h-[320px] bg-primary/30 rounded-md">
      {/* info div  */}
      <div className="w-[90%] h-[70%] rounded-md bg-primary/90 absolute -bottom-4 left-8 font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-gray-900 p-2 text-[14px] font-bold text-center">
          {locale === "ar" ? item.title : item.titleEn}
        </h2>
        <p className=" px-3 text-center text-[12px] font-bold text-gray-800">
          {locale === "ar" ? item.desc : item.descEn}
        </p>
        <LocalizedLink
          href="/profil/1"
          className="px-4  bg-slate-200 text-gray-900 font-bold cursor-pointer my-2 text-[14px]"
        >
          {t("product.btn")}
        </LocalizedLink>
      </div>
      {/* image div  */}
      <div className="w-full h-full ">
        <Image
          src={item.image}
          alt={item.titleEn}
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardProfil;
