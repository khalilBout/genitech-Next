import Link from "next/link";
import { getProducts } from "@/utilit/getData/getProducts";
import TableAllProduct from "@/components/Dashboard/TableAllProduct";
// import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/components/Ui/EmptyView";
import LocalizedLink from "@/components/Ui/LocalizedLink";

const pageProductAdmin = async () => {
  //   const page = searchParams?.page || 1;

  const { allProducts } = await getProducts();
  // console.log("allProduct serv", allProducts);
  return (
    <div className="w-full font-Title overflow-auto">
      <div className="p-2  shadow-md  rounded-md">
        <div className="flex justify-between  items-start ">
          <h2 className=" font-Title text-slate-200 text-2xl p-2 font-medium">
            المنتجات الرقمية
          </h2>
          <LocalizedLink href="/dashboard/product/addProduct">
            <button className=" font-Title mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
              إضافة منتج
            </button>
          </LocalizedLink>
        </div>
        <div className=" h-[1px] w-full bg-slate-200"></div>
        <div className="w-full min-h-[350px]">
          {allProducts?.length > 0 ? (
            <TableAllProduct data={allProducts} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                <EmptyView />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageProductAdmin;
