"use client";
import { useTranslations } from "next-intl";

import bg1 from "@/public/blog/bg1.png";
import heroBlog from "@/public/blog/heroBlog.png";
import BlogCard from "@/components/home/BlogComp/BlogCard";
import Image from "next/image";

const BlogPage = ({ dataBlog }) => {
  const t = useTranslations();
  return (
    <section className="screenPadding">
      {/* hero section         */}
      <div className="flex justify-between items-center mt-14">
        {/* info dev  */}
        <div className="relative mt-16 mdl:mt-24 w-full mdl:w-1/2 font-Title h-full flex flex-col justify-center ">
          <h1 className="py-2 text-2xl sm:text-3xl  xl:text-5xl text-primary mt-4 mdl:mt-16 xl:my-4">
            {t("blog.title")}
          </h1>
          <h1 className="text-slate-200 text-xl sm:text-2xl xl:text-3xl ">
            {t("blog.suTitle")}
          </h1>
          <h3 className="text-slate-200 text-[12px] md:text-[14px] mdl:text-[15px] my-4">
            {t("hero.desc")}
          </h3>
          <div className="mdl:hidden absolute -top-6 left-0 right-0 w-full flex justify-end ">
            <img src={bg1} alt="" className="w-[120px] h-auto" />
          </div>
        </div>

        {/* image dev  */}
        <div className="hidden w-1/2 mdl:flex justify-center items-center">
          <Image src={heroBlog} alt="" className="mt-8 w-[80%] h-auto" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-2xl font-Title text-slate-200 my-4">
          {" "}
          {t("blog.title2")}{" "}
        </h2>
        <div className="w-full h-[1px] bg-slate-200 "></div>
      </div>
      {/* data blogs  */}
      <div className=" my-4 flex flex-wrap justify-center gap-2">
        {dataBlog.map((item, ind) => (
          <BlogCard key={ind} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
