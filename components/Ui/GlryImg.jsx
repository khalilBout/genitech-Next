"use client";
import React, { useState } from "react";
import Image from "next/image";

const GlryImg = ({ elm }) => {
  const [mainImg, setMainImg] = useState(elm?.mainImg);

  return (
    <div className="">
      <div className="w-full min-w-[400px] min-h-[320px] relative flex justify-center items-center">
        <Image
          src={mainImg}
          alt={elm.title_en}
          fill
          className=" object-cover"
        />
      </div>
      <div className=" flex justify-center items-center flex-wrap gap-2 m-2">
        <Image
          src={elm.mainImg}
          alt={elm.title}
          quality={100}
          width={120}
          height={90}
          className=" cursor-pointer object-cover"
          onClick={() => {
            setMainImg(elm.mainImg);
          }}
        />

        {elm?.listImage?.map((item, ind) => (
          <div key={ind} className=" w-[120px] h-[90px]">
            <Image
              src={item}
              alt={ind}
              width={120}
              height={90}
              quality={80}
              className=" cursor-pointer object-cover"
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
