import Hero from "@/components/DeskApp/Hero";
import WhyUs from "@/components/DeskApp/WhyUs";
import Features from "@/components/DeskApp/Features";
import Steps from "@/components/DeskApp/Steps";

import Product from "@/components/home/Product/Product";
import Profil from "@/components/home/Profil/Profil";
import BlogComp from "@/components/home/BlogComp/BlogComp";
import ContactPage from "@/components/home/Contact/ContactPage";
import WhatsAppBtn from "@/components/home/WhatsAppBtn/WhatsAppBtn";

import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

const pageDeskApp = async () => {
  const { allPortfolios } = await getPortfolios();
  const { allProducts } = await getProducts();
  const { AllBlogs } = await getLastBlogs();

  // const filterProduct = allProducts.filter((elm) =>
  //   elm.category.includes("deskApp")
  // );
  return (
    <div className=" ">
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
export default pageDeskApp;
