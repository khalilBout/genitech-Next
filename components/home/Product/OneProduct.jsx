"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import React, { useState } from "react";
import logoBg from "@/public/logoBg.webp";

import CardProduct from "@/components/home/Product/CardProduct";
import Image from "next/image";
import GlryImg from "@/components/Ui/GlryImg";

const OneProduct = ({ item, allProducts }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    // <section className="screenPadding font-Title mt-28">
    //   <div className>
    //     <h1 className="text-3xl text-primary"> {t("product.title")} </h1>
    //   </div>

    //   <div className="my-8 flex flex-col mdl:flex-row justify-between items-center">
    //     {/* info dev  */}
    //     <div className="w-full mdl:w-1/2 font-Title h-full flex flex-col justify-center">
    //       <h1 className="py-2 text-xl sm:text-2xl  xl:text-3xl text-primary mt-4 mdl:mt-16 xl:my-4">
    //         {locale === "ar" ? item.title : item.title_en}
    //       </h1>
    //       <h1 className="text-slate-200 text-xl sm:text-2xl xl:text-3xl "></h1>
    //       <p className="text-slate-200 text-[12px] md:text-[14px] mdl:text-[14px] my-2">
    //         {`${
    //           locale === "ar"
    //             ? item.description.slice(0, 240)
    //             : item.description_en.slice(0, 240)
    //         }...`}
    //       </p>
    //       <a
    //         href="#moreInfo"
    //         className="mt-18 mdl:mt-26 w-[120px] text-center float-end px-2 py-1 rounded-md bg-primary text-slate-200 hover:bg-slate-200 hover:text-gray-950 transition-all duration-200 font-bold font-Title text-[15px] "
    //       >
    //         {t("product.btn")}
    //       </a>
    //     </div>

    //     {/* image dev  */}
    //     <div className="m-1 w-full mdl:w-1/2 max-h-[600px] min-h-[380px] flex justify-center items-centers">
    //       <GlryImg elm={item} />
    //     </div>
    //   </div>

    //   {/* details */}

    //   <div id="moreInfo" className="mt-14 mdl:mt-24">
    //     <h1 className="text-slate-200 text-[18px] mdl:text-[22px] xl:text-[26px]">
    //       {t("product.detail")}
    //     </h1>

    //     <div className="min-h-[660px] relative text-slate-200">
    //       {/* <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]"> */}
    //       <ReactMarkdown>
    //         {locale === "ar" ? item.description : item.description_en}
    //       </ReactMarkdown>
    //       {/* </p> */}
    //       <div className=" absolute top-0 left-0 right-0">
    //         <Image src={logoBg} alt="logo Bg" className="h-full w-auto" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-full h-[1px] bg-primary my-2 mdl:my-4"></div>

    //   <h1 className="text-slate-200 text-xl mdl:text-2xl my-2">
    //     {t("product.ourWork")}
    //   </h1>
    //   <div className="flex flex-wrap justify-center items-center gap-2 my-4">
    //     {allProducts?.map((item, ind) => (
    //       <CardProduct key={ind} item={item} />
    //     ))}
    //   </div>
    // </section>

    <section className="screenPadding font-Title mt-20 mdl:mt-24">
      <div className>
        <h1 className="mt-8 mdl:mt-18 text-3xl text-primary">
          {" "}
          {t("product.title")}{" "}
        </h1>
      </div>

      <div className="my-8 flex flex-col mdl:flex-row justify-between items-center">
        {/* image dev  */}
        <div className="overflow-hidden w-full m-1 py-2 flex justify-center items-centers">
          <GlryImg elm={item} />
        </div>
      </div>

      {/* details */}

      <div id="moreInfoProf" className="mt-14 mdl:mt-24">
        <h1 className="py-2 text-[15px] sm:text-xl  xl:text-2xl text-primary mt-4 mdl:mt-16 xl:my-4">
          {locale === "ar" ? item.title : item.title_en}
        </h1>

        <h1 className="text-primary text-xl mdl:text-2xl xl:text-3xl py-4 mdl:py-8">
          {t("product.detail")}
        </h1>

        <div className="min-h-[660px] relative text-slate-200">
          {/* <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]"> */}
          <ReactMarkdown>
            {locale === "ar" ? item.description : item.description_en}
          </ReactMarkdown>
          {/* </p> */}
          <div className=" absolute top-0 left-0 right-0">
            <Image src={logoBg} alt="logo Bg" className="h-full w-auto" />
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-primary mt-8 mdl:mt-12"></div>

      <h1 className="text-primary text-xl mdl:text-2xl xl:text-3xl py-4 mdl:py-8">
        {t("product.ourWork")}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 my-4">
        {allProducts?.map((item, ind) => (
          <CardProduct key={ind} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OneProduct;
