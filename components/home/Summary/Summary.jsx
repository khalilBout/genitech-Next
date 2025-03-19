"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import logo from "@/public/logo.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";

const Summary = () => {
  const t = useTranslations();

  const dataDesc = [
    t("summary.desc-1"),
    t("summary.desc-2"),
    t("summary.desc-3"),
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
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="text-[18px] mdl:text-[22px] font-semibold text-slate-200 text-center my-2"
      >
        {t("summary.title")}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.3,
        }}
        className=" w-full mdl:w-2/3"
      >
        <p className="text-[12px] mdl:text-[14px] text-slate-200 text-center">
          {dataDesc[index]}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        dir="ltr"
        className=" relative flex justify-center items-center gap-4 mb-2"
      >
        <button
          onClick={() => prevText()}
          className="z-50 w-[30px] h-[30px] rounded-full border border-primary flex justify-center items-center"
        >
          <IoIosArrowBack className="text-primary" size={20} />
        </button>
        <button
          onClick={() => nextText()}
          className="z-50 w-[30px] h-[30px] rounded-full border border-primary flex justify-center items-center"
        >
          <IoIosArrowForward className="text-primary" size={20} />
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.5,
        }}
        className="w-full mdl:w-2/3"
      >
        <p className="text-[12px] mdl:text-[14px] text-slate-200 text-center">
          {t("summary.text")}
        </p>
      </motion.div>
      {/* logo  img */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className="w-[120px] h-[50px] my-2"
      >
        <Image src={logo} alt="logo" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Summary;
