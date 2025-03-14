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

import Product from "@/models/product";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const getProducts = async () => {
  try {
    await connectDB();
    const allProduct = await Product.find();

    // إرجاع مصفوفة فارغة إذا لم يتم العثور على أي منتجات
    return { allProducts: allProduct.length > 0 ? allProduct : [] };
  } catch (err) {
    console.error("Error fetching Products:", err);
    // إرجاع مصفوفة فارغة في حالة حدوث خطأ بدلاً من كسر التطبيق
    return { allProducts: [] };
  }
};

export const getProductById = async (id) => {
  try {
    await connectDB();
    const TheProduct = await Product.findById(id);
    const productData = JSON.parse(JSON.stringify(TheProduct));

    // console.error("THE blog:", blogData);

    return { productData };
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Error fetching product");
  }
};
