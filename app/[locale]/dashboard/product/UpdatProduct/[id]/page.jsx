import { getProductById } from "@/utilit/getData/getProducts";
import EditProduct from "@/utilit/Forms/EditProduct";

const page = async ({ params }) => {
  const id = params.id;
  const { productData } = await getProductById(id);
  return (
    <div dir="rtl" className="w-full mt-4">
      <h2 className="text-1xl font-bold m-2  ">
        <span className="text-slate-200 px-2 ">المنتج </span>
        <span className="text-red-400">{productData?.title}</span>
      </h2>
      <EditProduct productData={productData} />
    </div>
  );
};

export default page;
