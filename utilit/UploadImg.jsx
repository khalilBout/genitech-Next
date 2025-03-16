"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const UploadImg = ({ setMainImg }) => {
  const handelSuccess = (result) => {
    // console.log("data image:", result.info.secure_url);
    setMainImg(result.info.secure_url);
  };
  return (
    <div className=" ">
      <CldUploadWidget uploadPreset="genitechCloud" onSuccess={handelSuccess}>
        {({ open }) => {
          return (
            <button
              className="py-3 px-3 rounded-xl bg-primary text-black text-[18px] font-semibold p-2 text-center cursor-pointer"
              onClick={() => open()}
            >
              رفع الصورة الرئيسية
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImg;
