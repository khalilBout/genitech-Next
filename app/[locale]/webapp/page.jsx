import Hero from "@/components/WebApp/Hero";
import WhyUs from "@/components/WebApp/WhyUs";
import Features from "@/components/WebApp/Features";
import Steps from "@/components/WebApp/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

const pageWebApp = () => {
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
export default pageWebApp;
