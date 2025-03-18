"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import logoBg from "@/public/logoBg.webp";

import CardProfil from "@/components/home/Profil/CardProfil";
import Image from "next/image";
import GlryImg from "@/components/Ui/GlryImg";

const OneProfil = ({ item, allPortfolios }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="screenPadding font-Title mt-20 mdl:mt-24">
      <div className>
        <h1 className="mt-8 mdl:mt-18 text-3xl text-primary">
          {" "}
          {t("profil.titlePageId")}{" "}
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

        <h1 className="text-lime-400 text-xl mdl:text-2xl xl:text-3xl py-4 mdl:py-8">
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

      <h1 className="text-lime-400 text-xl mdl:text-2xl xl:text-3xl py-4 mdl:py-8">
        {t("product.ourWork")}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 my-4">
        {allPortfolios?.map((item, ind) => (
          <CardProfil key={ind} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OneProfil;
