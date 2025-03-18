import Hero from "@/components/WebApp/Hero";
import WhyUs from "@/components/WebApp/WhyUs";
import Features from "@/components/WebApp/Features";
import Steps from "@/components/WebApp/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

const pageWebApp = async () => {
  const { allPortfolios } = await getPortfolios();
  const { allProducts } = await getProducts();
  const { AllBlogs } = await getLastBlogs();

  // const filterProduct = allProducts.filter((elm) =>
  //   elm.category.includes("webApp")
  // );

  return (
    <div className=" overflow-hidden">
      <WhatsAppBtn />
      <Hero />
      <WhyUs />
      <Features />
      <Steps />
      <Product allProducts={allProducts} />
      <Profil allPortfolios={allPortfolios} />
      <BlogComp dataBlog={AllBlogs} />
      <ContactPage />
    </div>
  );
};
export default pageWebApp;
