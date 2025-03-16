"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img2 from "@/public/slidAuto/img2.webp";
import img3 from "@/public/slidAuto/img3.webp";
import img4 from "@/public/slidAuto/img4.webp";
import Image from "next/image";

const images = [img2, img3, img4];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden ">
      <motion.div
        key={index} // لإعادة تشغيل الأنيميشن عند كل تغيير للصورة
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
