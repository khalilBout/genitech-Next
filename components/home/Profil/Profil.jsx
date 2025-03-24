"use client";
import { useTranslations } from "next-intl";
import CardProfil from "./CardProfil";
import Slider from "react-slick";
import ImageSlider from "@/components/Ui/SlidAuto";
import EmptyView from "@/components/Ui/EmptyView";

const Profil = ({ allPortfolios }) => {
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
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 1360,
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
      <h1 className=" py-2 mdl:py-4 text-xl mdl:text-2xl xl:text-3xl font-Title font-bold text-slate-200">
        {t("profil.title")}-
        <span className="text-primary">{t("profil.span")}</span>
      </h1>
      <h1 className="pb-2 text-xl mdl:text-2xl xl:text-3xl font-Title font-medium text-slate-200">
        {t("profil.title2")}
      </h1>
      <div className="w-full flex justify-between items-center gap-4 ">
        <div className=" w-[90%] mdl:w-[85%]  lg:w-[75%] mx-auto my-4 ">
          {allPortfolios?.length > 0 ? (
            <Slider {...settings}>
              {allPortfolios?.map((item, ind) => (
                <CardProfil key={ind} item={item} />
              ))}
            </Slider>
          ) : (
            <EmptyView />
          )}
        </div>
        {/* image div  */}
        <div className=" hidden lg:flex justify-center items-center lg:w-[25%] h-full">
          {/* <img className="w-[100%] h-auto" src={imgProfil} alt="imgProfil" /> */}
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Profil;
