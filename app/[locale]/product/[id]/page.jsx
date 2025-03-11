import React from "react";
import OneProduct from "@/components/home/Product/OneProduct";

import img1 from "@/public/product/p1.png";
import img2 from "@/public/product/p2.png";
import img3 from "@/public/product/p3.png";

const page = () => {
  const dataProduct = {
    title: "تطبيق GymMaster لإدارة الصالات الرياضية",
    desc: "GymMaster هو تطبيق متكامل مخصص لإدارة الصالات الرياضية، حيث يوفر حلولًا رقمية متقدمة لمتابعة الاشتراكات، جدولة الحصص، تتبع تقدم الأعضاء، وإدارة العمليات اليومية بسهولة. يتيح لك التطبيق تحسين تجربة المشتركين وتعزيز الكفاءة التشغيلية، مما يساعد على زيادة ولاء العملاء وتحقيق أرباح أعلى.",
    detail:
      "GymMaster هو تطبيق متكامل مخصص لإدارة الصالات الرياضية، حيث يوفر حلولًا رقمية متقدمة لمتابعة الاشتراكات، جدولة الحصص، تتبع تقدم الأعضاء، وإدارة العمليات اليومية بسهولة. يتيح لك التطبيق تحسين تجربة المشتركين وتعزيز الكفاءة التشغيلية، مما يساعد على زيادة ولاء العملاء وتحقيق أرباح أعلى.",
    titleEn: "GymMaster App for Gym Management",
    descEn:
      "GymMaster is a comprehensive application designed for gym management, offering advanced digital solutions for tracking memberships, scheduling classes, monitoring member progress, and managing daily operations with ease. The app enhances the member experience and boosts operational efficiency, helping to increase customer loyalty and maximize profits.",
    detailEn:
      "GymMaster is a comprehensive application designed for gym management, offering advanced digital solutions for tracking memberships, scheduling classes, monitoring member progress, and managing daily operations with ease. The app enhances the member experience and boosts operational efficiency, helping to increase customer loyalty and maximize profits.",
    image: [img1, img2, img3],
  };
  return (
    <>
      <OneProduct dataProduct={dataProduct} />
    </>
  );
};

export default page;
