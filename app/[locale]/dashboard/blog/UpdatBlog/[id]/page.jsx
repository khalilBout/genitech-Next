import { getBlogById } from "@/utilit/getData/getBlogs";
import EditBlog from "@/utilit/Forms/EditBlog";

const page = async ({ params }) => {
  const id = params.id;
  const { blogData } = await getBlogById(id);
  return (
    <div dir="rtl" className="w-full mt-4">
      <h2 className="text-1xl font-bold m-2  ">
        <span className="text-slate-200 px-2 ">المدونة </span>
        <span className="text-red-400">{blogData?.title}</span>
      </h2>
      <EditBlog blogData={blogData} />
    </div>
  );
};

export default page;
