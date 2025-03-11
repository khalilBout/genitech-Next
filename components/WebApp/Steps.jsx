"use client";
import { useTranslations } from "next-intl";
import webSteps from "@/public/webApp/webStep.png";
import Image from "next/image";

const Steps = () => {
  const t = useTranslations();

  const dataSteps = [
    {
      title: t("webApp.steps.step-1.title"),
      desc: t("webApp.steps.step-1.desc"),
    },
    {
      title: t("webApp.steps.step-2.title"),
      desc: t("webApp.steps.step-2.desc"),
    },
    {
      title: t("webApp.steps.step-3.title"),
      desc: t("webApp.steps.step-3.desc"),
    },
    {
      title: t("webApp.steps.step-4.title"),
      desc: t("webApp.steps.step-4.desc"),
    },
  ];
  return (
    <section className="screenPadding relative flex flex-col justify-center items-center max-mdl:my-4 ">
      {/* <div className="max-mdl:absolute max-mdl:top-1/2 max-mdl:left-1/2 max-mdl:transform max-mdl:-translate-x-1/2 max-mdl:-translate-y-1/2 max-mdl:opacity-5 max-mdl:w-full mdl:w-3/5 mdl:mt-28 xl:mt-12 h-full">
        <img
          src={why}
          alt=""
          className="w-[80%] sml:w-[90%] xl:w-full h-auto"
        />
      </div> */}
      {/* info dev  */}
      <div className=" mdl:w-[90%] font-Title  mx-4 flex flex-col justify-center items-center ">
        <h1 className="text-center text-slate-200 text-xl sm:text-2xl xl:text-4xl ">
          {t("webApp.steps.title")}
        </h1>
        <p className="text-center text-slate-200  text-[12px] md:text-[14px] mdl:text-[15px] my-4">
          {t("webApp.steps.desc")}
        </p>

        <div className=" relative w-full mt-6 flex flex-row md:flex-col justify-center md:justify-between  md:min-h-[400px] lg:w-[80%]">
          <div className=" opacity-20 md:opacity-60 mdl:md:opacity-90 w-[60%]  sml:w-[40%] h-[80%] absolute top-1/3 md:top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={webSteps} alt="image" className="w-full h-auto" />
          </div>
          {/* box  */}
          <div className=" flex flex-col md:flex-row justify-between">
            {dataSteps.slice(0, 2).map((elm, ind) => (
              <div key={ind} className="max-w-[220px] m-2">
                {/* info  */}
                <h2 className="text-primary text-[12px] sm:text-[13px] sml:text-[15px] mdl:text-[14px] lg:text-[16px] font-bold">
                  {elm.title}
                </h2>
                <p className="text-slate-200 text-[12px] md:text-[14] text-justify">
                  {elm.desc}
                </p>
              </div>
            ))}
          </div>
          <div className=" flex flex-col md:flex-row justify-between ">
            {dataSteps.slice(2, 4).map((elm, ind) => (
              <div key={ind} className="max-w-[220px] m-2">
                {/* info  */}
                <h2 className="text-primary text-[12px] sm:text-[13px] sml:text-[15px] mdl:text-[14px] lg:text-[16px] font-bold">
                  {elm.title}
                </h2>
                <p className="text-slate-200 text-[12px] md:text-[14] text-justify ">
                  {elm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] my-8 bg-slate-200"></div>
    </section>
  );
};

export default Steps;
