"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const CardProduct = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <LocalizedLink
      href={`/product/${item._id}`}
      className="m-4 flex h-[350px] max-w-[400px] bg-primary/30 rounded-md"
    >
      {/* info div  */}
      <div className="w-1/2 h-full font-Title my-auto flex flex-col justify-center items-center text-slate-200 text-center px-2">
        <h2 className="py-2 text-emerald-300 p-3text-[16px] mdl:text-[18px] font-bold text-center">
          {`${
            locale === "ar"
              ? item?.title.slice(0, 30)
              : item?.title_en.slice(0, 30)
          }...`}
        </h2>
        <ReactMarkdown>
          {`${
            locale === "ar"
              ? item?.description.slice(0, 120)
              : item?.description_en.slice(0, 120)
          }...`}
        </ReactMarkdown>
        <button className="px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer my-2 text-[14px]">
          {t("product.btn")}
        </button>
      </div>
      {/* image div  */}
      <div className=" relative w-1/2 h-full rounded-md bg-slate-300">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </LocalizedLink>
  );
};

export default CardProduct;
