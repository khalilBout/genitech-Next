import React from "react";
import Image from "next/image";
import DeleteProduct from "./DeleteProduct";
// import NoImg from "@/public/image/noImgeBook.webp";

const TableAllProduct = ({ data }) => {
  // console.log("data:", data);

  return (
    <>
      <table className="w-full " data-tab-for="product" data-page="active">
        <thead>
          <tr>
            <th className="max-w-[120px] text-[15px] font-Title px-2 text-right font-bold text-slate-200 p-2">
              الصورة
            </th>
            <th className="text-[15px] font-Title text-right font-bold text-slate-200 p-2">
              العنوان
            </th>
            <th className="text-[15px] font-Title text-center font-bold text-slate-200 p-2">
              حدف
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((elm, index) => (
            <Tr item={elm} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAllProduct;

function Tr({ item }) {
  const { _id, title, mainImg } = item;
  return (
    <>
      <tr className="bg-red-100/40 rounded-xl">
        {/* Image  */}
        <td className=" max-w-[120px] py-2 px-4 border-b border-b-gray-50 ">
          <div className="relative h-[60px] w-[60px] overflow-hidden">
            <Image
              // fill
              quality={100}
              width={60}
              height={60}
              objectFit="cover"
              objectPosition="center"
              src={mainImg}
              alt={title}
              className="w-[60px] h-[60px] rounded-full object-cover overflow-hidden bg-teal-100"
              // className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
            />
          </div>
        </td>

        {/* name of book  */}
        <td className="text-[13px] font-Title font-medium text-center py-2 px-2 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-900">{title}</span>
        </td>

        {/* Actions  */}

        <td className="text-[13px] text-center py-1 px-4 border-b border-b-gray-50">
          <DeleteProduct id={_id} />
        </td>
      </tr>
    </>
  );
}
