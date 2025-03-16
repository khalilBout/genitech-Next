"use client";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

const BlogCard = ({ item }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <LocalizedLink
      href={`/blog/${item._id}`}
      className="m-2 flex flex-col h-[280px] w-[320px] bg-primary/30 rounded-md"
    >
      {/* image div  */}
      <div className=" relative min-h-[100px] w-full rounded-t-md bg-slate-300">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="rounded-t-md w-full h-full object-cover"
        />
      </div>

      {/* info div  */}
      <div className=" w-full p-2 font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-slate-200 p-1 text-[14px]  font-bold text-center">
          {`${
            locale === "ar"
              ? item?.title.slice(0, 60)
              : item?.title_en.slice(0, 60)
          }...`}
        </h2>
        <p className=" px-3 text-center text-[12px] text-slate-200">
          {`${
            locale === "ar"
              ? item?.description.slice(0, 180)
              : item?.description_en.slice(0, 180)
          }...`}
        </p>
        <button className="my-2 px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer text-[14px]">
          {t("blogComp.btn")}
        </button>
      </div>
    </LocalizedLink>
  );
};
export default BlogCard;
