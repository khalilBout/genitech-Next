// import Hero from "@/components/hero";
// import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      {/* <Navbar /> */}
      <h1 className="text-4xl">home page</h1>
      <h2 className="text-2xl">{t("title")}</h2>
      {/* <h1 className="text-4xl">{t("title")}</h1> */}
      {/* <Hero /> */}
      {/* <WhyUs /> */}
    </div>
  );
}
