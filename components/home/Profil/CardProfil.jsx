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
    // <div className=" relative m-4 flex w-[210px] h-[320px] bg-primary/30 rounded-md">
    //   {/* info div  */}
    //   <div className="w-[100%] h-[80%] rounded-md bg-primary/90 absolute z-20 -bottom-4 left-6 font-Title my-auto flex flex-col justify-between items-stretch text-gray-950 text-center px-2">
    //     <h2 className=" py-2 text-blue-950 text-[15px] mdl:text-[16px] font-bold text-center">
    //       {`${
    //         locale === "ar"
    //           ? item?.title.slice(0, 40)
    //           : item?.title_en.slice(0, 40)
    //       }...`}
    //     </h2>

    //     <ReactMarkdown>
    //       {`${
    //         locale === "ar"
    //           ? item?.description.slice(0, 100)
    //           : item?.description_en.slice(0, 100)
    //       }...`}
    //     </ReactMarkdown>

    //     <LocalizedLink
    //       href={`/profil/${item._id}`}
    //       className="px-4 py-1 bg-slate-200 text-gray-900 font-bold cursor-pointer my-2 text-[14px]"
    //     >
    //       {t("product.btn")}
    //     </LocalizedLink>
    //   </div>
    //   {/* image div  */}
    //   <div className=" relative w-full h-full ">
    //     <Image
    //       src={item?.mainImg}
    //       alt={item?.title_en}
    //       fill
    //       className="z-10 rounded-md w-full h-full object-cover"
    //     />
    //   </div>
    // </div>
    <div className=" mx-auto w-[270px] h-[330px]">
      {/* صورة الخلفية */}
      <div className="w-[270px] h-[270px]  bg-slate-300 overflow-hidden relative">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* تدرج الخلفية */}
      {/* <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/70 to-black/0 absolute z-10 top-0 left-0"></div> */}
      <div className=" relative bg-sky-950  w-full h-[60px] mdl:h-[60px] ">
        {/* العنوان */}
        <h1 className="pt-1 text-[14px] mdl:text-[15px] text-center font-Title mx-2 text-primary h-[22%] px-2 w-full">
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
          href={`/profil/${item._id}`}
          className={`rounded-full absolute bottom-1 ${
            locale === "ar" ? "left-2" : "right-2"
          } z-50 px-2 py-[2px] bg-primary/80 text-slate-200 font-Title font-bold cursor-pointer my-1 text-[13px]`}
        >
          {t("product.btn")}
        </LocalizedLink>
      </div>
    </div>
  );
};

export default CardProfil;
