"use client";
import { useTranslations } from "next-intl";
import CardProduct from "./CardProduct";
import Slider from "react-slick";
import EmptyView from "@/components/Ui/EmptyView";

const Product = ({ allProducts }) => {
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
        breakpoint: 740,
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
      <div className="w-[90%] lg:w-[90%] xl:w-full h-auto mx-auto my-4">
        {allProducts?.length > 0 ? (
          <Slider {...settings}>
            {allProducts?.map((item, ind) => (
              <CardProduct key={ind} item={item} />
            ))}
          </Slider>
        ) : (
          <EmptyView />
        )}
      </div>
    </div>
  );
};

export default Product;
