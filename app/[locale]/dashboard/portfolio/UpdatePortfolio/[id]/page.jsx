import { getPortfolioById } from "@/utilit/getData/getPortfolio";
import EditPortfili from "@/utilit/Forms/EditPortfili";

const page = async ({ params }) => {
  const id = params.id;
  const { portfolioData } = await getPortfolioById(id);
  return (
    <div dir="rtl" className="w-full mt-4">
      <h2 className="text-1xl font-bold m-2  ">
        <span className="text-slate-200 px-2 ">العمل </span>
        <span className="text-red-400">{portfolioData?.title}</span>
      </h2>
      <EditPortfili portfolioData={portfolioData} />
    </div>
  );
};

export default page;
