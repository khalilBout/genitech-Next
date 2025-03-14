"use client";
import React from "react";
import Link from "next/link";
import LocalizedLink from "../Ui/LocalizedLink";

const Sidebar = () => {
  return (
    <aside
      dir="rtl"
      className=" hidden xl:block md:w-1/5 lg:w-1/6 bg-[#CEEBFD] pt-12"
    >
      <div className="h-[320px] flex flex-col item-center justify-between font-Title">
        <ul className="flex flex-col justify-center items-center gap-6 ">
          <li>
            <LocalizedLink
              href="/dashboard/product"
              className=" bg-slate-400 hover:scale-105 text-[16px] font-bold text-slate-900 hover:text-white px-4 py-1 rounded-md hover:bg-primary transition-all duration-200"
            >
              المنتجات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink
              href="/dashboard/portfolio"
              className=" bg-slate-400 hover:scale-105 text-[16px] font-bold text-slate-900 hover:text-white px-4 py-1 rounded-md hover:bg-primary transition-all duration-200"
            >
              الأعمال
              {/* <span className="text-red-300">({cart.length})</span> */}
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink
              href="/dashboard/blog"
              className=" bg-slate-400 hover:scale-105 text-[16px] font-bold text-slate-900 hover:text-white px-4 py-1 rounded-md hover:bg-primary transition-all duration-200"
            >
              المدونات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </LocalizedLink>
          </li>
        </ul>
        <hr border />
        <div className="w-full flex justify-center ">
          <Link
            // href='/profile'
            href="/api/auth/signout?callbackUrl=/"
            className="my-4 px-3 font-bold py-1 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            // onClick={logoutHandler}
          >
            تسجيل الخروج
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
