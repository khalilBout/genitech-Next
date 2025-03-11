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
      href="/blog/1"
      className="m-2 flex flex-col w-[320px] bg-primary/30 rounded-md"
    >
      {/* image div  */}
      <div className="h-1/2 w-full rounded-t-md bg-slate-300">
        <Image
          src={item.image}
          alt={item.titleEn}
          className="rounded-t-md w-full h-full object-cover"
        />
      </div>

      {/* info div  */}
      <div className=" w-full p-2 font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-slate-200 p-1 text-[14px]  font-bold text-center">
          {locale === "ar" ? item.title : item.titleEn}
        </h2>
        <p className="py-2 px-3 text-center text-[12px] text-slate-200">
          {locale === "ar" ? item.desc : item.descEn}
        </p>
        <button className="my-2 px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer text-[14px]">
          {t("blogComp.btn")}
        </button>
      </div>
    </LocalizedLink>
  );
};
export default BlogCard;
