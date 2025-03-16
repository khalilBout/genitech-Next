import React from "react";
import OneBlog from "@/components/Blog/OneBlog";
import { getBlogById } from "@/utilit/getData/getBlogs";
import { getLastBlogs } from "@/utilit/getData/getBlogs";

export async function generateMetadata({ params }) {
  const blogDetailsData = await getBlogById(params.id);

  return {
    title: blogDetailsData.title_en,
    description: blogDetailsData.description_en,
  };
}

const page = async ({ params }) => {
  const { blogData } = await getBlogById(params.id);
  const { AllBlogs } = await getLastBlogs();

  return (
    <>
      <OneBlog item={blogData} AllBlogs={AllBlogs} />
    </>
  );
};

export default page;
