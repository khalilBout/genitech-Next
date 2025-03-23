import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import logoBg from "@/public/logoBg.webp";
import policy from "@/public/policy.png";

const page = ({ item, AllBlogs }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="screenPadding font-Title mt-18 mdl:mt-28">
      <div className="flex gap-2">
        <div className="w-full mdl:w-1/2 flex flex-col justify-center gap-4">
          <h1 className=" text-[32px] text-primary">{t("privacy.title")}</h1>
          <p className="text-[18px] text-slate-200 ">{t("privacy.desc")}</p>
        </div>
        <div className="w-full mdl:w-1/2">
          <Image
            src={policy}
            alt="policy"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

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
