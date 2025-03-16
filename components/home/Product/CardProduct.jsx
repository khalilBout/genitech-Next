"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

const CardProduct = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();
  console.log("the Products from client", item);

  return (
    <LocalizedLink
      href={`/product/${item._id}`}
      className="m-4 flex h-[350px] max-w-[400px] bg-primary/30 rounded-md"
    >
      {/* info div  */}
      <div className="w-1/2 h-full font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-slate-200 p-3text-[14px] mdl:text-[15px] font-bold text-center">
          {`${
            locale === "ar"
              ? item?.title.slice(0, 60)
              : item?.title_en.slice(0, 60)
          }...`}
        </h2>
        <p className="py-2 px-3 text-center text-[13px] text-slate-200">
          {`${
            locale === "ar"
              ? item?.description.slice(0, 240)
              : item?.description_en.slice(0, 240)
          }...`}
        </p>
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
