"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Statistic = () => {
  const t = useTranslations();

  return (
    <div
      dir="ltr"
      className="my-8 md:my-12 text-slate-200 flex mdl:flex-col justify-center items-center divide-x mdl:divide-y mdl:divide-x-0"
    >
      <div className="flex flex-col mdl:flex-row justify-center items-center divide-y mdl:divide-x mdl:divide-y-0">
        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-1.nub")}
          </h2>
          <h2 className="text-center text-[13px] font-semibold px-2">
            {t("Statistic.box-1.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-2.nub")}
          </h2>
          <h2 className="text-center text-[13px] font-semibold px-2">
            {t("Statistic.box-2.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-3.nub")}
          </h2>
          <h2 className="text-center text-[13px] font-semibold">
            {t("Statistic.box-3.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-4.nub")}
          </h2>
          <h2 className="text-center text-[13px] font-semibold">
            {t("Statistic.box-4.desc")}
          </h2>
        </div>
      </div>

      <div className="flex flex-col mdl:flex-row justify-center items-center divide-y mdl:divide-x  mdl:divide-y-0">
        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-5.nub")}
          </h2>
          <h2 className="text-center text-[13px] font-semibold px-2">
            {t("Statistic.box-5.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-6.nub")}
          </h2>
          <h2 className="text-center text-[13px]  font-semibold px-2">
            {t("Statistic.box-6.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-7.nub")}
          </h2>
          <h2 className="text-center text-[13px]  font-semibold px-2">
            {t("Statistic.box-7.desc")}
          </h2>
        </div>

        <div className="w-28 mdl:w-32 h-28 mdl:h-32  flex flex-col justify-center items-center font-Title text-xl hover:bg-primary hover:text-gray-900 duration-200 transition-all">
          <h2 className="text-center text-[16px] font-bold">
            {t("Statistic.box-8.nub")}
          </h2>
          <h2 className="text-center text-[13px]  font-semibold px-2">
            {t("Statistic.box-8.desc")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
