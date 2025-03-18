"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const CardProfil = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  // const lng = cookies.get("i18next") || "ar";

  return (
    <div className=" relative m-4 flex w-[210px] h-[320px] bg-primary/30 rounded-md">
      {/* info div  */}
      <div className="w-[100%] h-[80%] rounded-md bg-primary/90 absolute z-20 -bottom-4 left-6 font-Title my-auto flex flex-col justify-between items-stretch text-gray-950 text-center px-2">
        <h2 className=" py-2 text-blue-950 text-[15px] mdl:text-[16px] font-bold text-center">
          {`${
            locale === "ar"
              ? item?.title.slice(0, 40)
              : item?.title_en.slice(0, 40)
          }...`}
        </h2>

        <ReactMarkdown>
          {`${
            locale === "ar"
              ? item?.description.slice(0, 100)
              : item?.description_en.slice(0, 100)
          }...`}
        </ReactMarkdown>

        <LocalizedLink
          href={`/profil/${item._id}`}
          className="px-4 py-1 bg-slate-200 text-gray-900 font-bold cursor-pointer my-2 text-[14px]"
        >
          {t("product.btn")}
        </LocalizedLink>
      </div>
      {/* image div  */}
      <div className=" relative w-full h-full ">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="z-10 rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardProfil;
