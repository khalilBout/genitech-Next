"use client";
import { useTranslations } from "next-intl";
import CardProduct from "./CardProduct";
import img1 from "@/public/product/p1.png";
import Slider from "react-slick";

const dataProduct = [
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
];

const Product = () => {
  const t = useTranslations();

  var settings = {
    dots: false,
    // infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // arrow: true,
        },
      },
    ],
  };
  return (
    <div className="screenPadding my-12">
      <h1 className="py-4 text-xl mdl:text-2xl xl:text-3xl font-Title font-bold text-slate-200">
        <span className="text-primary">{t("product.title")}-</span>
        {t("product.title2")}
      </h1>
      <p className="text-slate-200 font-Title text-[14px] mdl:text-[15]">
        {t("product.desc")}
      </p>
      <div className="w-full md:w-[80%] lg:w-[90%] xl:w-full mx-auto my-4">
        <Slider {...settings}>
          {dataProduct.map((item, ind) => (
            <CardProduct key={ind} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
