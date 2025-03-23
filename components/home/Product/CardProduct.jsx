"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
// import ReactMarkdown from "react-markdown";

const CardProduct = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    // <div className="m-4 flex h-[350px] max-w-[400px] bg-primary/30 rounded-md">
    //   {/* info div  */}
    //   <div className="w-1/2 h-full font-Title my-auto flex flex-col justify-center items-center text-slate-200 text-center px-2">
    //     <h2 className="py-2 text-emerald-300 p-3text-[16px] mdl:text-[18px] font-bold text-center">
    //       {`${
    //         locale === "ar"
    //           ? item?.title.slice(0, 30)
    //           : item?.title_en.slice(0, 30)
    //       }...`}
    //     </h2>
    //     <ReactMarkdown>
    //       {`${
    //         locale === "ar"
    //           ? item?.description.slice(0, 120)
    //           : item?.description_en.slice(0, 120)
    //       }...`}
    //     </ReactMarkdown>
    //     <LocalizedLink
    //       href={`/product/${item._id}`}
    //       className="z-50 px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer my-2 text-[14px]"
    //     >
    //       {t("product.btn")}
    //     </LocalizedLink>
    //   </div>
    //   {/* image div  */}
    //   <div className=" relative w-1/2 h-full rounded-md bg-slate-300">
    //     <Image
    //       src={item?.mainImg}
    //       alt={item?.title_en}
    //       fill
    //       className="rounded-md w-full h-full object-cover"
    //     />
    //   </div>
    // </div>

    <div className="relative mx-auto w-[270px] h-[270px] md mdl:h-[320px] mdl:w-[320px]">
      {/* صورة الخلفية */}
      <div className="w-full h-full rounded-md bg-slate-300 overflow-hidden relative">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* تدرج الخلفية */}
      <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/70 to-black/0 absolute z-10 top-0 left-0"></div>

      {/* العنوان */}
      <h1 className=" text-[14px] font-medium mdl:text-[16px] text-center font-Title mx-2 my-1 text-primary h-[22%] px-2 w-full absolute z-20 bottom-0">
        {locale === "ar"
          ? item?.title.length > 55
            ? `${item?.title.slice(0, 55)} ...`
            : item?.title
          : item?.title_en.length > 55
          ? `${item?.title_en.slice(0, 55)} ...`
          : item?.title_en}
      </h1>

      {/* رابط المنتج */}
      <LocalizedLink
        href={`/product/${item._id}`}
        className="w-full h-full absolute top-0 left-0 z-50 cursor-pointer "
      ></LocalizedLink>
    </div>
  );
};

export default CardProduct;
