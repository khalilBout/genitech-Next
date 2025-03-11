import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";
import Hero from "@/components/home/Hero/Hero";
import Statistic from "@/components/home/Statistic/Statistic";
import Services from "@/components/home/Services/Services";
import About from "@/components/home/About/About";
import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import Comment from "@/components/home/Comment/Comment";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import Contact from "@/components/home/Contact/Contact";
import Summary from "@/components/home/Summary/Summary";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className=" overflow-hidden">
      <WhatsAppBtn />
      <Hero />
      <Statistic />
      <Services />
      <About />
      <Product />
      <Profil />
      <Comment />
      <BlogComp />
      <Contact />
      <Summary />
    </div>
  );
}
