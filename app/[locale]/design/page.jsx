import Hero from "@/components/Design/Hero";
import WhyUs from "@/components/Design/WhyUs";
import Features from "@/components/Design/Features";
import Steps from "@/components/Design/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

const pageDesignApp = async () => {
  const { allPortfolios } = await getPortfolios();
  const { allProducts } = await getProducts();
  const { AllBlogs } = await getLastBlogs();

  // const filterProduct = allProducts.filter((elm) =>
  //   elm.category.includes("design")
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
export default pageDesignApp;
