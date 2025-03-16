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
import { getLastPortfolios } from "@/utilit/getData/getPortfolio";
import { getLastProducts } from "@/utilit/getData/getProducts";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

const Home = async () => {
  const { allPortfolios } = await getLastPortfolios();
  const { allProducts } = await getLastProducts();
  const { AllBlogs } = await getLastBlogs();

  // const dataBlog = AllBlogs.slice(0, 3);
  // const dataProducts = allProducts.slice(0, 3);
  // const dataPortfolios = allPortfolios.slice(0, 3);
  // const t = useTranslations("HomePage");
  // console.log("data from home: data desply Blogs", dataBlog);
  // console.log("data from home All Blogs: ", AllBlogs);

  return (
    <div className=" overflow-hidden">
      <WhatsAppBtn />
      <Hero />
      <Statistic />
      <Services />
      <About />
      <Product allProducts={allProducts} />
      <Profil allPortfolios={allPortfolios} />
      <Comment />
      <BlogComp dataBlog={AllBlogs} />
      <Contact />
      <Summary />
    </div>
  );
};
export default Home;
