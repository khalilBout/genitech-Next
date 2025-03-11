"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CartComment = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: item.id * 0.1,
      }}
      dir="ltr"
      className=" border border-primary rounded-md w-[250px] md:max-w-[290px] font-Title m-2 p-3"
    >
      {/* info  */}
      <div className="flex justify-start items-center gap-4">
        <Image
          src={item.img}
          alt={item.user}
          className="w-[40px] md:w-[65px] h-[40px] md:h-[65px]"
        />
        <h3 className="font-Title font-bold text-[14px] md:text-[16px] md:text-xl text-primary">
          {" "}
          {item.user}{" "}
        </h3>
      </div>
      <div>
        <p className="text-slate-200 text-center text-[12px] md:text-[14px]">
          {" "}
          {item.content}{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default CartComment;
