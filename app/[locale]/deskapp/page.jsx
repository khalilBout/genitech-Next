import Hero from "@/components/DeskApp/Hero";
import WhyUs from "@/components/DeskApp/WhyUs";
import Features from "@/components/DeskApp/Features";
import Steps from "@/components/DeskApp/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

const pageDeskApp = () => {
  return (
    <div className=" ">
      <WhatsAppBtn />
      <Hero />
      <WhyUs />
      <Features />
      <Steps />
      <Product />
      <Profil />
      <BlogComp />
      <ContactPage />
    </div>
  );
};
export default pageDeskApp;
