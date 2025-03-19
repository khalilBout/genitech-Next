"use client";
import React, { useState } from "react";
import Image from "next/image";

const GlryImg = ({ elm }) => {
  const [mainImg, setMainImg] = useState(elm?.mainImg);

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className=" w-[90%] min-h-[420px] relative flex justify-center items-center">
        <Image
          src={mainImg}
          alt={elm.title_en}
          fill
          className=" object-contain"
        />
      </div>
      <div className=" flex justify-center items-center flex-wrap gap-2 m-2">
        <div className=" relative w-[80px] h-[80px] mdl:w-[120px] mdl:h-[120px] ">
          <Image
            src={elm.mainImg}
            alt={elm.title}
            quality={100}
            fill
            className="cursor-pointer object-fill"
            onClick={() => {
              setMainImg(elm.mainImg);
            }}
          />
        </div>
        {elm?.listImage?.map((item, ind) => (
          <div
            key={ind}
            className=" relative w-[80px] h-[80px] mdl:w-[120px] mdl:h-[120px] "
          >
            <Image
              src={item}
              alt={ind}
              quality={80}
              fill
              className=" cursor-pointer object-fill"
              onClick={() => {
                setMainImg(item);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlryImg;
