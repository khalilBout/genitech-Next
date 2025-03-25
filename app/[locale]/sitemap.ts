// import { BlogPostsResponse } from "@/models/BlogPost";
// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const response = await fetch("https://dummyjson.com/posts");
//   const { posts }: BlogPostsResponse = await response.json();

//   const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
//     url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
//     // lastModified: new Date(post.updatedAt),
//     // changeFrequency:,
//     // priority:
//   }));

//   return [
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
//       lastModified: new Date(),
//     },
//     ...postEntries,
//   ];
// }

import { MetadataRoute } from "next";
import { getBlogs } from "@/utilit/getData/getBlogs";
import { getPortfolios } from "@/utilit/getData/getPortfolio";
import { getProducts } from "@/utilit/getData/getProducts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // جلب البيانات من الموديلات الثلاثة
  const blogs = await getBlogs();
  const portfolios = await getPortfolios();
  const products = await getProducts();

  // اللغات المتاحة
  const languages: string[] = ["ar", "en"];

  // معالجة روابط المدونات
  const blogEntries: MetadataRoute.Sitemap = blogs.AllBlogs.flatMap(
    (blog: { _id: string; updatedAt?: string; createdAt: string }) =>
      languages.map((lang) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/blog/${blog._id}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
      }))
  );

  // معالجة روابط المشاريع
  const portfolioEntries: MetadataRoute.Sitemap =
    portfolios.allPortfolios.flatMap(
      (portfolio: { _id: string; updatedAt?: string; createdAt: string }) =>
        languages.map((lang) => ({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/portfolios/${portfolio._id}`,
          lastModified: new Date(portfolio.updatedAt || portfolio.createdAt),
        }))
    );

  // معالجة روابط المنتجات
  const productEntries: MetadataRoute.Sitemap = products.allProducts.flatMap(
    (product: { _id: string; updatedAt?: string; createdAt: string }) =>
      languages.map((lang) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/products/${product._id}`,
        lastModified: new Date(product.updatedAt || product.createdAt),
      }))
  );

  // الروابط الثابتة مع إضافة دعم اللغتين
  const staticRoutes: MetadataRoute.Sitemap = languages.flatMap((lang) => [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/deskapp`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/webapp`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/design`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/mobileapp`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/privacy`,
      lastModified: new Date(),
    },
  ]);

  return [
    ...staticRoutes,
    ...blogEntries,
    ...portfolioEntries,
    ...productEntries,
  ];
}
