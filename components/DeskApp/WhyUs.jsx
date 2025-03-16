"use client";
import { useTranslations } from "next-intl";
import deskWhy from "@/public/deskApp/whyDesk.webp";
import box1 from "@/public/icons/icon1.webp";
import box2 from "@/public/icons/icon2.webp";
import box3 from "@/public/icons/icon3.webp";
import box4 from "@/public/icons/icon4.webp";
import Image from "next/image";
const WhyUs = () => {
  const t = useTranslations();

  const dataBox = [
    { title: t("deskApp.why.box-1"), image: box1 },
    { title: t("deskApp.why.box-2"), image: box2 },
    { title: t("deskApp.why.box-3"), image: box3 },
    { title: t("deskApp.why.box-4"), image: box4 },
  ];
  return (
    <section className="screenPadding relative flex justify-center items-center max-mdl:my-4">
      {/* image dev  */}
      <div className="max-mdl:absolute max-mdl:top-1/2 max-mdl:left-1/2 max-mdl:transform max-mdl:-translate-x-1/2 max-mdl:-translate-y-1/2 max-mdl:opacity-5 max-mdl:w-full mdl:w-3/5 mdl:mt-28 xl:mt-12 h-full">
        <Image
          src={deskWhy}
          alt=""
          className="w-[80%] sml:w-[90%] xl:w-full h-auto"
        />
      </div>
      {/* info dev  */}
      <div className=" mdl:w-2/5 font-Title h-full mx-4">
        <h1 className="text-slate-200 text-xl sm:text-2xl xl:text-4xl ">
          {t("deskApp.why.title")}
        </h1>
        <p className="text-slate-200 text-justify text-[12px] md:text-[14px] mdl:text-[15px] my-4">
          {t("deskApp.why.desc")}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* box  */}
          {dataBox.map((elm, ind) => (
            <div key={ind} className=" flex justify-between items-start">
              {/* info  */}
              <div className="">
                <h2 className="text-primary text-[12px] sm:text-[13px] sml:text-[15px] mdl:text-[14px] lg:text-[16px] font-bold">
                  {elm.title}
                </h2>
              </div>
              {/* image  */}
              <div className="">
                <Image
                  src={elm.image}
                  alt=""
                  className="min-w-[50px] h-auto "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
