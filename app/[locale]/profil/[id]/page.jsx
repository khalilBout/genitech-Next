import React from "react";
import OneProfil from "@/components/home/Profil/OneProfil";

import { getPortfolioById } from "@/utilit/getData/getPortfolio";
import { getLastPortfolios } from "@/utilit/getData/getPortfolio";

export async function generateMetadata({ params }) {
  const DetailsData = await getPortfolioById(params.id);

  return {
    title: DetailsData.title_en,
    description: DetailsData.description_en,
  };
}
const page = async ({ params }) => {
  const { portfolioData } = await getPortfolioById(params.id);
  const { allPortfolios } = await getLastPortfolios();

  return (
    <>
      <OneProfil item={portfolioData} allPortfolios={allPortfolios} />
    </>
  );
};

export default page;
