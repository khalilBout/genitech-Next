import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard"],
      },
    ],
    sitemap: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/ar/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/en/sitemap.xml`,
    ],
  };
}
