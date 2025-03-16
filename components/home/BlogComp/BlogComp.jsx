"use client";
import React from "react";
import { useTranslations } from "next-intl";
import BlogCard from "./BlogCard";



const BlogComp = ({ dataBlog }) => {
  const t = useTranslations();

  return (
    <div className="screenPadding my-8">
      {/* info  */}
      <div className="font-Title flex justify-between">
        <h1 className="text-xl mdl:text-2xl xl:text-3xl font-bold text-slate-200">
          <span className="text-primary ">{t("blogComp.title")} </span>
          {t("blogComp.span")}
        </h1>
        <button className="text-[13px] mdl:text-[15px] bg-primary px-1 mdl:px-2 py-1 min-w-[100px] h-[35px] cursor-pointer rounded-md font-bold text-gray-950  ">
          {" "}
          {t("blogComp.btn")}
        </button>
      </div>
      {/* image  */}
      <div className="my-8 flex justify-center items-center flex-wrap gap-2">
        {dataBlog.map((item, ind) => (
          <BlogCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogComp;
