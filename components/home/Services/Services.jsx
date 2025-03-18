"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import dsg from "@/public/services/dsg.webp";
import dst from "@/public/services/dst.webp";
import mbl from "@/public/services/mbl.webp";
import web from "@/public/services/web.webp";
import Link from "next/link";
import Image from "next/image";
import LocalizedLink from "@/components/Ui/LocalizedLink";

const Services = () => {
  const t = useTranslations();

  const serverData = [
    {
      id: 1,
      image: mbl,
      title: t("services.servis-1.title"),
      desc: t("services.servis-1.desc"),
      link: "/mobileapp",
    },
    {
      id: 2,
      image: web,
      title: t("services.servis-2.title"),
      desc: t("services.servis-2.desc"),
      link: "/webapp",
    },
    {
      id: 3,
      image: dst,
      title: t("services.servis-3.title"),
      desc: t("services.servis-3.desc"),
      link: "/deskapp",
    },
    {
      id: 4,
      image: dsg,
      title: t("services.servis-4.title"),
      desc: t("services.servis-4.desc"),
      link: "/design",
    },
  ];

  return (
    <div
      id="services"
      className="my-14 mdl:my-24 flex flex-col justify-center items-center gap-8"
    >
      {/* hero title  */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-xl md:text-2xl lg:text-3xl text-center font-Title font-bold text-primary"
        >
          {t("services.heroTitle")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-xl md:text-2xl lg:text-3xl text-center font-Title font-bold text-primary"
        >
          {t("services.heroTitle2")}
        </motion.h1>
      </div>
      {/* services  */}
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 mdl:grid-cols-2 gap-16 p-4 w-full max-w-mdl sm:max-w-lg md:max-w-xl">
          {serverData.map((elm, ind) => (
            <LocalizedLink
              href={elm.link}
              key={ind}
              className=" relative h-[300px] max-w-[230px] "
            >
              <motion.h1
                initial={{ opacity: 0, rotateZ: -30 }}
                whileInView={{ opacity: 1, rotateZ: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: ind * 0.1,
                }}
                className=" absolute -left-12 -top-12 text-[240px] font-bold font-Title text-slate-200/10"
              >
                {elm.id}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: ind * 0.1,
                }}
                className=" w-[85%] h-[90%] rounded-md bg-slate-300/10"
              >
                <div
                  dir="ltr"
                  className="mx-2 my-1 flex justify-center items-center "
                >
                  <h2 className=" text-primary text-center font-Title text-[16px] font-bold py-2">
                    {elm.title}
                  </h2>
                  <Image src={elm.image} alt="" className="w-[80px] h-[80px]" />
                </div>
                <p className=" text-slate-200 text-[13px] font-Title text-justify px-4 py-2">
                  {elm.desc}
                </p>
              </motion.div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
