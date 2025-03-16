import Blog from "@/models/blog";
import connectDB from "@/utilit/connectDB";

export const dynamic = "force-dynamic";

export const getBlogs = async () => {
  try {
    await connectDB();

    const allBlog = await Blog.find();

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const blogs = JSON.parse(JSON.stringify(allBlog));

    return { AllBlogs: blogs.length > 0 ? blogs : [] };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { AllBlogs: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};

export const getBlogById = async (id) => {
  try {
    await connectDB();
    const TheBlog = await Blog.findById(id);
    const blogData = JSON.parse(JSON.stringify(TheBlog));

    // console.error("THE blog:", blogData);

    return { blogData };
  } catch (err) {
    console.error("Error fetching blog:", err);
    throw new Error("Error fetching blog");
  }
};

export const getLastBlogs = async () => {
  try {
    await connectDB(); // الاتصال بقاعدة البيانات

    const lastBlog = await Blog.find()
      .sort({ createdAt: -1 }) // ترتيب تنازلي لجلب آخر 3 مدونات
      .limit(3); // جلب آخر 3 فقط

    // تحويل البيانات إلى JSON للتخلص من ObjectId والمستندات غير المتسلسلة
    const blogs = JSON.parse(JSON.stringify(lastBlog));

    return { AllBlogs: blogs.length > 0 ? blogs : [] };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { AllBlogs: [] }; // إرجاع مصفوفة فارغة عند حدوث خطأ
  }
};
