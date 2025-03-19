"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";

import logoBg from "@/public/logoBg.webp";
import BlogCard from "@/components/home/BlogComp/BlogCard";
import Image from "next/image";

const OneBlog = ({ item, AllBlogs }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="screenPadding mt-20 flex flex-col items-center my-8">
      {/* image div  */}
      <div className=" relative h-[400px] w-[80%] my-8 ">
        <Image
          src={item?.mainImg}
          alt={item?.title_en}
          fill
          className="w-full h-auto object-contain"
        />
      </div>
      {/* info div  */}
      <div className="font-Title ">
        <h1 className=" py-2 mdl:py-4 text-primary text-[16px] mdl:text-[20px] xl:text-[24px]">
          {locale === "ar" ? item.title : item.title_en}
        </h1>
        <div className="min-h-[660px] relative">
          <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]">
            <ReactMarkdown>
              {locale === "ar" ? item.description : item.description_en}
            </ReactMarkdown>
          </p>
          <div className=" absolute top-0 left-0 right-0">
            <Image src={logoBg} alt="logo Bg" className="h-full w-auto" />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-slate-200 text-xl mdl:text-2xl font-Title my-3 ">
          {t("blog.titleInTheBlog")}
        </h1>
        <div className="w-full h-[1px] bg-primary"></div>

        <div className=" my-4 flex flex-wrap justify-center gap-2">
          {AllBlogs?.map((item, ind) => (
            <BlogCard key={ind} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneBlog;
