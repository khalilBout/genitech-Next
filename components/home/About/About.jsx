"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import logo from "@/public/about/logo.webp";
import sport from "@/public/about/sport.webp";
import qlt from "@/public/about/qlt.webp";
import Image from "next/image";
const About = () => {
  const t = useTranslations();

  return (
    <div
      id="aboutUs"
      className="screenPadding relative flex justify-center items-center "
    >
      {/* info  */}
      <div className=" w-full mdl:w-1/2 font-Title">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.1,
          }}
          className="text-2xl xl:text-4xl text-primary font-bold"
        >
          {" "}
          {t("about.title-1")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="mt-2 text-[20px] xl:text-3xl text-slate-200 font-bold"
        >
          {t("about.title-2")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="py-1 mdl:py-4 text-[13px] xl:text-[15px] text-slate-200"
        >
          {t("about.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="flex flex-col xl:flex-row w-full "
        >
          {/* sport  */}
          <div className="w-full xl:w-1/2 flex justify-between items-center px-2">
            <div className="px-2 flex flex-col items-start h-[50%] mdl:h-[70%]">
              <h3 className=" text-[16px] mb-1 font-semibold text-primary">
                {t("about.sport.title")}
              </h3>
              <p className="text-[13px]  text-slate-200">
                {t("about.sport.desc")}
              </p>
            </div>
            <Image src={qlt} alt="sport" className="h-[90px] w-auto" />
          </div>
          {/* service  */}
          <div className="w-full xl:w-1/2 flex justify-between items-center px-2">
            <div className="px-2 flex flex-col items-start h-[50%] mdl:h-[70%]">
              <h3 className=" text-[16px] mb-1 font-semibold text-primary">
                {t("about.service.title")}
              </h3>
              <p className="text-[13px]  text-slate-200">
                {t("about.service.desc")}
              </p>
            </div>
            <Image src={sport} alt="sport" className="h-[90px] w-auto" />
          </div>
        </motion.div>
      </div>
      {/* image  */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className=" max-mdl:absolute max-mdl:top-12 max-mdl:left-0 max-mdl:right-0 max-mdl:opacity-10 max-mdl:w-full mdl:w-3/5 h-full flex justify-center items-center"
      >
        <Image
          src={logo}
          alt="logo"
          className="w-[90%] h-auto opacity-15 mdl:opacity-100"
        />
      </motion.div>
    </div>
  );
};

export default About;
