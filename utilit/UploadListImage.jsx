"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";

const UploadListImage = ({ setListImage, listImage }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = (result) => {
    const info = result?.info;
    if (!info?.secure_url) {
      console.log("فشل رفع الصورة");
      return;
    }

    const newImage = info.secure_url;

    // نستعمل listImage مباشرة بدل استخدام useState داخلي
    if (listImage.includes(newImage)) {
      console.log("تم رفع هذه الصورة مسبقًا");
      return;
    }

    const updatedList = [...listImage, newImage];
    setListImage(updatedList);
    console.log("تم رفع الصورة بنجاح");
    setUploading(false);
  };
  console.log("listImage from uplod :", listImage);

  return (
    <div className="px-4 py-2 rounded-lg bg-primary text-center">
      <CldUploadButton
        uploadPreset="genitechCloud"
        onUpload={(res) => {
          setUploading(true);
          handleUpload(res);
        }}
        className="mx-1 px-4 py-2 bg-white text-black text-[16px] font-semibold rounded-xl cursor-pointer hover:bg-slate-200 transition-all"
      >
        {uploading ? "جاري رفع الصورة..." : "إضافة صور أخرى"}
      </CldUploadButton>
    </div>
  );
};

export default UploadListImage;
