"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    // <LocalizedLink
    //   href={`/blog/${item._id}`}
    //   className="m-2 flex flex-col h-[280px] w-[320px] bg-primary/30 rounded-md"
    // >
    //   {/* image div  */}
    //   <div className=" relative min-h-[100px] w-full rounded-t-md bg-slate-300">
    //     <Image
    //       src={item?.mainImg}
    //       alt={item?.title_en}
    //       fill
    //       className="rounded-t-md w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* info div  */}
    //   <div className=" w-full p-2 font-Title my-auto flex flex-col justify-center items-center text-slate-200 text-center px-2">
    //     <h2 className="text-slate-200 p-1 text-[16px]  font-bold text-center">
    //       {`${
    //         locale === "ar"
    //           ? item?.title.slice(0, 30)
    //           : item?.title_en.slice(0, 30)
    //       }...`}
    //     </h2>
    //     <ReactMarkdown>
    //       {`${
    //         locale === "ar"
    //           ? item?.description.slice(0, 100)
    //           : item?.description_en.slice(0, 100)
    //       }...`}
    //     </ReactMarkdown>
    //     <button className=" z-50 my-2 px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer text-[14px]">
    //       {t("blogComp.btn")}
    //     </button>
    //   </div>
    // </LocalizedLink>
    <LocalizedLink
      href={`/blog/${item._id}`}
      className="relative mx-auto w-[270px] h-[270px] md mdl:h-[320px] mdl:w-[320px]"
    >
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
      <div className=" w-full h-full bg-gradient-to-t from-black/90 via-black/70 to-black/0 absolute z-10 top-0 left-0"></div>

      {/* العنوان */}
      <h1 className="mx-auto text-[14px] mdl:text-[16px] text-center font-Title my-1 text-primary h-[22%] px-2 w-full absolute z-20 bottom-0">
        {locale === "ar"
          ? item?.title.length > 55
            ? `${item?.title.slice(0, 55)} ...`
            : item?.title
          : item?.title_en.length > 55
          ? `${item?.title_en.slice(0, 55)} ...`
          : item?.title_en}
      </h1>
    </LocalizedLink>
  );
};
export default BlogCard;
