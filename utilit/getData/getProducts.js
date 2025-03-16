import Product from "@/models/product";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const getProducts = async () => {
  try {
    await connectDB();

    const allProduct = await Product.find();

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const products = JSON.parse(JSON.stringify(allProduct));

    return { allProducts: products.length > 0 ? products : [] };
  } catch (err) {
    console.error("Error fetching products:", err);
    return { allProducts: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};

export const getProductById = async (id) => {
  try {
    await connectDB();
    const TheProduct = await Product.findById(id);
    const productData = JSON.parse(JSON.stringify(TheProduct));

    return { productData };
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Error fetching product");
  }
};

export const getLastProducts = async () => {
  try {
    await connectDB(); // الاتصال بقاعدة البيانات

    const lastProduct = await Product.find()
      .sort({ createdAt: -1 }) // ترتيب تنازلي لجلب آخر 3 منتجات
      .limit(3); // جلب آخر 3 فقط

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const products = JSON.parse(JSON.stringify(lastProduct));

    return { allProducts: products.length > 0 ? products : [] };
  } catch (err) {
    console.error("Error fetching products:", err);
    return { allProducts: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};
