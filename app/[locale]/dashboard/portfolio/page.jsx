import Link from "next/link";
import { getPortfolios } from "@/utilit/getData/getPortfolio";
import TableAllPortfolio from "@/components/Dashboard/TableAllProduct";
// import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/components/Ui/EmptyView";

const pagePortfolioAdmin = async () => {
  //   const page = searchParams?.page || 1;

  const { allPortfolios } = await getPortfolios();
  // console.log("al Portfolioss serv", allPortfolios);
  return (
    <div className="w-full font-Title overflow-auto">
      <div className="p-2  shadow-md  rounded-md">
        <div className="flex justify-between  items-start ">
          <h2 className=" font-Title text-slate-200 text-2xl p-2 font-medium">
            أعمالنا السابقة
          </h2>
          <Link href="/dashboard/portfolio/addPortfolio">
            <button className=" font-Title mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
              إضافة عمل
            </button>
          </Link>
        </div>
        <div className=" h-[1px] w-full bg-slate-200"></div>
        <div className="w-full min-h-[350px]">
          {allPortfolios?.length > 0 ? (
            <TableAllPortfolio data={allPortfolios} />
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

export default pagePortfolioAdmin;
