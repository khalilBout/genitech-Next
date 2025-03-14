// const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// export const dynamic = "force-dynamic";

// export const getProductById = async (id) => {
//   try {
//     const res = await fetch(`${API_URL}/api/product/${id}`, {
//       method: "GET",
//       // cache: "no-store",
//     });

//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getProducts = async () => {

//   try {
//     const res = await fetch(`${API_URL}/api/product`, {
//       method: "GET",
//       // cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

import Portfolio from "@/models/portfolio";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const getPortfolios = async () => {
  try {
    await connectDB();
    const allPortfolio = await Portfolio.find();
    console.log("prt from fitch fun", allPortfolio);

    // إرجاع مصفوفة فارغة إذا لم يتم العثور على أي منتجات
    return { allPortfolios: allPortfolio.length > 0 ? allPortfolio : [] };
  } catch (err) {
    console.error("Error fetching Portfolio:", err);
    // إرجاع مصفوفة فارغة في حالة حدوث خطأ بدلاً من كسر التطبيق
    return { allPortfolios: [] };
  }
};

export const getPortfoliosById = async (id) => {
  try {
    await connectDB();
    const ThePortfolio = await Portfolio.findById(id);
    const portfolioData = JSON.parse(JSON.stringify(ThePortfolio));

    // console.error("THE blog:", blogData);

    return { portfolioData };
  } catch (err) {
    console.error("Error fetching Portfolio:", err);
    throw new Error("Error fetching Portfolio");
  }
};
