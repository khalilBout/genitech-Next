import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import logoBg from "@/public/logoBg.webp";
import policy from "@/public/policy.png";

const page = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="screenPadding font-Title ">
      {/* <div className="flex gap-2 mt-24 mdl:mt-24 ">
        <div className="w-full mdl:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-[24px] mdl:text-[32px] text-primary">
            {t("privacy.title")}
          </h1>
          <p className="text-[18px] mdl:text-[18px] text-slate-200 ">
            {t("privacy.desc")}
          </p>
        </div>
        <div className=" hidden mdl:block mdl:w-1/2 ">
          <Image
            src={policy}
            alt="policy"
            className="w-full h-full object-contain"
          />
        </div>
      </div> */}
      <section className=" mt-12 flex justify-center items-center">
        {/* info dev  */}
        <div className="mt-20 mdl:mt-28 xl:mt-36 mdl:w-3/5 font-Title h-full ">
          <h1 className="py-2 text-[28px] sm:text-[32px] text-primary mt-4 mdl:mt-12 xl:my-4">
            {t("privacy.title")}
          </h1>

          <h3 className="text-slate-200 max-mdl:text-justify text-[16px] mdl:text-[18px] mt-2">
            {t("privacy.desc")}
          </h3>
        </div>

        {/* image dev  */}
        <div className="max-mdl:px-8 max-mdl:absolute max-mdl:top-20 max-mdl:left-0 max-mdl:right-0 max-mdl:opacity-10 max-mdl:w-full mdl:w-2/5 mdl:pt-12 mdl:mt-28 xl:mt-12 h-full">
          <Image
            src={policy}
            alt="policy"
            className="w-full max-w-[380px] h-auto object-contain"
          />
        </div>
      </section>

      {/* details */}

      <div className="mt-14 mdl:mt-24">
        <div className="min-h-[660px] relative text-slate-200">
          {/* <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]"> */}
          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-1.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-1.desc")}</p>
          </div>

          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-2.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-2.desc")}</p>
          </div>

          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-3.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-3.desc")}</p>
          </div>

          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-4.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-4.desc")}</p>
          </div>
          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-5.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-5.desc")}</p>
          </div>
          <div className="py-2">
            <h1 className="text-primary text-[15px] mdl:text-xl py-1 ">
              {t("privacy.part-6.title")}
            </h1>
            <p className="text-[14px]">{t("privacy.part-6.desc")}</p>
          </div>
          {/* </p> */}
          <div className=" absolute top-0 left-0 right-0">
            <Image src={logoBg} alt="logo Bg" className="h-full w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
