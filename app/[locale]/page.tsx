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
// get data
import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";
// import { getServerSession } from "next-auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Home = async () => {
  if (!baseUrl) {
    return null;
  }
  const { allPortfolios } = await getPortfolios();
  const { allProducts } = await getProducts();
  const { AllBlogs } = await getLastBlogs();

  // const session = await getServerSession();
  // console.log("session form home:", session);
  return (
    <div className="overflow-hidden ">
      <WhatsAppBtn />
      <Hero />
      <Statistic />
      <Services />
      <About />
      <Profil allPortfolios={allPortfolios} />
      <Product allProducts={allProducts} />
      <Comment />
      <BlogComp dataBlog={AllBlogs} />
      <Contact />
      <Summary />
    </div>
  );
};
export default Home;
