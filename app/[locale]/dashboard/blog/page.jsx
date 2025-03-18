import Link from "next/link";
import { getBlogs } from "@/utilit/getData/getBlogs";
import TableAllBlog from "@/components/Dashboard/TableAllBlog";
import EmptyView from "@/components/Ui/EmptyView";
import LocalizedLink from "@/components/Ui/LocalizedLink";

const pageBlogAdmin = async () => {
  const { AllBlogs } = await getBlogs();

  return (
    <div className="w-full font-Title overflow-auto">
      <div className="p-2  shadow-md  rounded-md">
        <div className="flex justify-between  items-start ">
          <h2 className=" font-Title text-slate-200 text-2xl p-2 font-medium">
            المدونات
          </h2>
          <LocalizedLink href="/dashboard/blog/addBlog">
            <button className=" font-Title mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
              إضافة مدونة
            </button>
          </LocalizedLink>
        </div>
        <div className=" h-[1px] w-full bg-slate-200"></div>
        <div className="w-full min-h-[350px]">
          {AllBlogs?.length > 0 ? (
            <TableAllBlog data={AllBlogs} />
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

export default pageBlogAdmin;
