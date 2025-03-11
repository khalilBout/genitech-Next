"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

import logoBg from "@/public/logoBg.png";

import img1 from "@/public/product/p1.png";

import CardProfil from "@/components/home/Profil/CardProfil";
import Image from "next/image";

// المنتجات المقترحة
const dataProfil = [
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
];

const OneProfil = ({ dataProduct }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [indexMainImage, setIndexMainImage] = useState(0);

  return (
    <section className="screenPadding font-Title mt-28">
      <div className>
        <h1 className="text-3xl text-primary"> {t("product.title")} </h1>
      </div>

      <div className="my-8 flex flex-col-reverse mdl:flex-row justify-between items-center">
        {/* info dev  */}
        <div className="w-full mdl:w-1/2 font-Title h-full flex flex-col justify-center">
          <h1 className="py-2 text-xl sm:text-2xl  xl:text-3xl text-primary mt-4 mdl:mt-16 xl:my-4">
            {locale === "ar" ? dataProduct.title : dataProduct.titleEn}
          </h1>
          <h1 className="text-slate-200 text-xl sm:text-2xl xl:text-3xl "></h1>
          <p className="text-slate-200 text-[12px] md:text-[14px] mdl:text-[14px] my-2">
            {`${
              locale === "ar"
                ? dataProduct.desc.slice(0, 280)
                : dataProduct.descEn.slice(0, 280)
            }...`}
          </p>
        </div>

        {/* image dev  */}
        <div className=" w-full mdl:w-1/2 max-h-[600px] flex flex-col mdl:flex-row justify-center items-center">
          <div className="m-2 w-[70%] h-[70%] flex justify-center items-centers">
            <Image
              src={dataProduct.image[indexMainImage]}
              alt={dataProduct.titleEn}
              className="mt-8 w-[50%] h-auto"
            />
          </div>
          <div className=" flex mdl:flex-col justify-center items-center gap-2">
            {dataProduct.image.map((elm, ind) => (
              <button
                key={ind}
                onClick={() => setIndexMainImage(ind)}
                className={`w-[60px] h-[60px] border-2 ${
                  indexMainImage === ind
                    ? "border-primary"
                    : "border-transparent"
                }`}
                aria-label={`عرض الصورة ${ind + 1}`}
              >
                <Image
                  src={elm}
                  alt={`صورة ${ind + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* details */}

      <div className="">
        <h1 className="text-slate-200 text-[18px] mdl:text-[22px] xl:text-[26px]">
          {t("product.detail")}
        </h1>

        <div className="min-h-[660px] relative">
          <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]">
            <ReactMarkdown>
              {locale === "ar" ? dataProduct.desc : dataProduct.descEn}
            </ReactMarkdown>
          </p>
          <div className=" absolute top-0 left-0 right-0">
            <Image src={logoBg} alt="logo Bg" className="h-full w-auto" />
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-primary my-2 mdl:my-4"></div>

      <h1 className="text-slate-200 text-xl mdl:text-2xl my-2">
        {t("product.ourWork")}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 my-4">
        {dataProfil.map((item, ind) => (
          <CardProfil key={ind} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OneProfil;
