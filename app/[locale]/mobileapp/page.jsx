import Hero from "@/components/PhoneApp/Hero";
import WhyUs from "@/components/PhoneApp/WhyUs";
import Features from "@/components/PhoneApp/Features";
import Steps from "@/components/PhoneApp/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

export async function generateMetadata({ params }) {
  return {
    title: "Phone App | تطبيقات الهاتف",
    description: "...",
  };
}

const pageMobileApp = async () => {
  const { allPortfolios } = await getPortfolios();
  const { allProducts } = await getProducts();
  const { AllBlogs } = await getLastBlogs();

  // const filterProduct = allProducts.filter((elm) =>
  //   elm.category.includes("mobileApp")
  // );

  return (
    <div className=" overflow-hidden">
      <WhatsAppBtn />
      <Hero />
      <WhyUs />
      <Features />
      <Steps />
      <Profil allPortfolios={allPortfolios} />
      <Product allProducts={allProducts} />
      <BlogComp dataBlog={AllBlogs} />
      <ContactPage />
    </div>
  );
};
export default pageMobileApp;
