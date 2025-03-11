"use client";
import { useTranslations } from "next-intl";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Features = () => {
  const t = useTranslations();

  const dataDesc = [
    t("deskApp.Features.desc1"),
    t("deskApp.Features.desc2"),
    t("deskApp.Features.desc3"),
  ];

  const [index, setIndex] = useState(0);
  const nextText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dataDesc.length);
  };

  const prevText = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + dataDesc.length) % dataDesc.length
    );
  };
  return (
    <div className="screenPadding my-12 font-Title flex flex-col justify-center items-center gap-3">
      <h1 className="text-[18px] mdl:text-[22px] font-semibold text-slate-200 text-center my-2">
        {t("deskApp.Features.title")}
      </h1>
      <div className=" w-full mdl:w-2/3">
        <p className="text-[12px] mdl:text-[14px] text-slate-200 text-center">
          {dataDesc[index]}
        </p>
      </div>
      <div dir="ltr" className="flex justify-center items-center gap-4 mb-2">
        <button
          onClick={() => prevText()}
          className="w-[30px] h-[30px] rounded-full border border-primary flex justify-center items-center"
        >
          <IoIosArrowBack className="text-primary" size={20} />
        </button>
        <button
          onClick={() => nextText()}
          className="w-[30px] h-[30px] rounded-full border border-primary flex justify-center items-center"
        >
          <IoIosArrowForward className="text-primary" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Features;
