"use client";
import React from "react";
import wapp from "@/public/wapp.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  const t = useTranslations();

  return (
    <a
      dir="rtl"
      href="https://wa.me/963956495873"
      className=" group fixed z-[100] bottom-8 right-6 w-[120px] mdl:w-[160px] flex justify-center items-center gap-2 font-Title font-semibold"
    >
      <motion.div
        animate={{
          // scale: [0, 2],
          rotateZ: [360, 0, 0, 360],
          // rotateZ: [0, -2, 0, -2, 0],
          // rotateX: [0, -10, 0, -10, 0],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          // repeatDelay: 0.5,
        }}
        className="relative "
      >
        <Image
          src={wapp}
          alt="wapp"
          quality={100}
          className="w-7 h-auto group-hover:scale-105"
        />
        <motion.div
          animate={{
            // scale: [0, 2],
            scale: [1, 2.2, 1, 2.2, 1],
            // rotateZ: [0, -2, 0, -2, 0],
            // rotateX: [0, -10, 0, -10, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            // repeatDelay: 1.2,
          }}
          className=" rounded-full w-5 h-5 bg-green-400/40 absolute -z-30 top-1 left-1"
        ></motion.div>
        <motion.div
          animate={{
            // scale: [0, 2],
            scale: [1, 2.5, 1, 2.5, 1],
            // rotateZ: [0, -2, 0, -2, 0],
            // rotateX: [0, -10, 0, -10, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className=" rounded-full w-5 h-5 bg-green-400/30 absolute -z-20 top-1 left-1"
        ></motion.div>
        {/* <div className=" rounded-full scale-[3] w-5 h-5 bg-green-400/40 absolute -z-10 top-1 left-1"></div> */}
      </motion.div>
      <span className=" rounded-full bg-black text-slate-200 px-2 py-1 text-[12px] mdl:text-[13px] text-center group-hover:scale-105  ">
        {t("hero.whatsapp")}
      </span>
    </a>
  );
};

export default WhatsAppBtn;
