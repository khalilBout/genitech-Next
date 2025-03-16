import Portfolio from "@/models/portfolio";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const getPortfolios = async () => {
  try {
    await connectDB();

    const allPortfolio = await Portfolio.find();
    console.log("prt from fetch function", allPortfolio);

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const portfolios = JSON.parse(JSON.stringify(allPortfolio));

    return { allPortfolios: portfolios.length > 0 ? portfolios : [] };
  } catch (err) {
    console.error("Error fetching Portfolio:", err);
    return { allPortfolios: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};

export const getPortfolioById = async (id) => {
  try {
    await connectDB();
    const ThePortfolio = await Portfolio.findById(id);
    const portfolioData = JSON.parse(JSON.stringify(ThePortfolio));

    return { portfolioData };
  } catch (err) {
    console.error("Error fetching Portfolio:", err);
    throw new Error("Error fetching Portfolio");
  }
};

export const getLastPortfolios = async () => {
  try {
    await connectDB(); // الاتصال بقاعدة البيانات

    const lastPortfolios = await Portfolio.find()
      .sort({ createdAt: -1 }) // ترتيب تنازلي لجلب آخر 3 مشاريع
      .limit(3); // جلب آخر 3 فقط

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const portfolios = JSON.parse(JSON.stringify(lastPortfolios));

    return { allPortfolios: portfolios.length > 0 ? portfolios : [] };
  } catch (err) {
    console.error("Error fetching Portfolio:", err);
    return { allPortfolios: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};
