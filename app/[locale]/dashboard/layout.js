import Sidebar from "@/components/Dashboard/Sidebar";
import LocalizedLink from "@/components/Ui/LocalizedLink";
import Link from "next/link";

export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="py-2 sm:py-2 bg-[#CEEBFD] mt-28 bg-purple ">
        <div className=" mx-4 mdl:mx-8 px-2 flex justify-between items-center">
          <h1 className="text-bold text-lightBlue font-bold text-xl mdl:text-3xl font-Title text-blue-900 py-1 px-2 ">
            لوحة التحكم
          </h1>
          <div className=" grow  font-Title xl:hidden flex justify-end items-center ">
            <ul className="flex justify-center items-center gap-2 mdl:gap-4">
              <li>
                <LocalizedLink
                  href="/dashboard/product"
                  className=" hover:scale-105 text-[14px] mdl:text-[16] font-bold text-blue-900 hover:text-white px-2 py-1 rounded-md hover:bg-primary transition-all duration-200"
                >
                  المنتجات
                  {/* <span className="text-red-300">({cart.length})</span> */}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  href="/dashboard/portfolio"
                  className=" hover:scale-105 text-[14px] mdl:text-[16] font-bold text-blue-900 hover:text-white px-2 py-1 rounded-md hover:bg-primary transition-all duration-200"
                >
                  الأعمال
                  {/* <span className="text-red-300">({cart.length})</span> */}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  href="/dashboard/blog"
                  className=" hover:scale-105 text-[14px] mdl:text-[16] font-bold text-blue-900 hover:text-white px-2 py-1 rounded-md hover:bg-primary transition-all duration-200"
                >
                  المدونات
                  {/* <span className="text-red-300">({cart.length})</span> */}
                </LocalizedLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" font-Title">
        <div className=" max-w-screen-xl mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <main className="grow p-2 ">
              <div className="">{children}</div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
