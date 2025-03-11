"use client";
import { useTranslations } from "next-intl";
import heroWeb from "@/public/webApp/webHero.png";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className=" screenPadding mt-12  flex justify-center items-center">
      {/* info dev  */}
      <div className="mt-20 mdl:mt-28 xl:mt-36 mdl:w-2/5 font-Title h-full mx-6">
        <h1 className="py-2 text-2xl sm:text-3xl  xl:text-6xl text-primary mt-4 mdl:mt-16 xl:my-4">
          {t("webApp.hero.title")}
        </h1>
        <h1 className="text-slate-200 text-xl sm:text-2xl xl:text-4xl ">
          {t("webApp.hero.suTitle")}
        </h1>
        <h3 className="text-slate-200 max-mdl:text-justify text-[12px] md:text-[14px] mdl:text-[15px] mt-4">
          {t("webApp.hero.desc")}
        </h3>
        <div className="mt-6 mdl:mt-12 flex justify-end gap-4">
          <button className="px-2 py-1 md:px-4 md:py-2 text-[12px] md:text-[14] border border-primary text-slate-200 hover:bg-primary hover:text-black cursor-pointer duration-150 transition-all font-bold">
            {t("webApp.hero.btn-1")}
          </button>
          <button className="px-2 py-1 md:px-4 md:py-2 text-[12px] md:text-[14] border border-primary text-black bg-primary hover:text-primary hover:bg-transparent cursor-pointer duration-150 transition-all font-bold">
            {t("webApp.hero.btn-2")}
          </button>
        </div>
      </div>

      {/* image dev  */}
      <div className="max-mdl:absolute max-mdl:top-20 max-mdl:left-0 max-mdl:right-0 max-mdl:opacity-10 max-mdl:w-full mdl:w-3/5 mdl:mt-28 xl:mt-12 h-full">
        <Image src={heroWeb} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
