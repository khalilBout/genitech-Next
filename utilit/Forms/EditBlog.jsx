"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Ui/Loading";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import UploadImg from "@/utilit/UploadImg";

const EditBlog = ({ blogData }) => {
  const id = blogData?._id;
  const router = useRouter();
  const [laudingSend, setLaudingSend] = useState(false);

  const [form, setForm] = useState({
    title: blogData.title,
    title_en: blogData.title_en,
    description: blogData.description,
    description_en: blogData.description_en,
    // mainImg: blogData.mainImg,
  });
  const [newImage, setNewImage] = useState(blogData.mainImg);

  const dataUpdated = {
    ...form,
    mainImg: newImage,
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Sending Update Data
  const sendUpdateData = async () => {
    // console.log("data blog apdate : ", dataUpdated);
    try {
      setLaudingSend(true);
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(dataUpdated),
      });
      if (res.status === 200) {
        // toast.success("Product is Updated.");
        router.push("/dashboard/blog");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLaudingSend(false);
    }
  };

  return (
    <>
      {laudingSend ? (
        <div className="w-full h-full flex justify-center item-center">
          <Loading />
        </div>
      ) : (
        <div className="mx-4 mdl:mx-8 ">
          {/* info of Product  */}
          <form className="space-y-4 my-4">
            <div className=" my-4 flex flex-col xl:flex-row gap-2">
              <input
                className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                placeholder="عنوان المدونة بالعربية"
                type="text"
                name="title"
                defaultValue={blogData.title}
                //   value={form.title}
                onChange={handleChange}
              />
              <input
                className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                placeholder="Blog Title in English"
                type="text"
                name="title_en"
                defaultValue={blogData.title_en}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                  placeholder="نص المدونة بالعربية"
                  name="description"
                  defaultValue={blogData.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                  placeholder="Blog Content in English"
                  name="description_en"
                  defaultValue={blogData.description_en}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>

          {/* image box  */}
          {/* <div className="flex justify-center items-center ">
            {newImage ? (
              <div className="flex flex-col gap-2 justify-center items-center text-slate-200">
                <h1 className="py-4 text-xl font-Title">صورة المدونة</h1>
                <div className="relative bg-slate-200 z-40 max-w-[320px] max-h-[320px]">
                  <Image
                    src={newImage}
                    alt="Main Blog Image"
                    // width={320}
                    // height={320}
                    fill
                    quality={100}
                    className=" w-full h-full object-contain rounded-lg"
                  />
                  <div className="z-40 absolute top-4 -left-4 w-[22px] h-[22px] rounded-full bg-primary hover:bg-red-500 ">
                    <button
                      className="text-red-700 hover:text-slate-200"
                      onClick={() => setNewImage("")}
                    >
                      <MdDeleteOutline size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <UploadImg setMainImg={setNewImage} />
            )}
          </div> */}
          {/* image box  */}
          <div className="flex justify-center items-center ">
            {newImage ? (
              <div className="flex flex-col gap-2 justify-center items-center text-slate-200">
                <h1 className="py-4 text-xl font-Title">صورة المدونة </h1>
                <div className=" relative bg-slate-200 z-40">
                  <Image
                    src={newImage}
                    alt="Main Blog Image"
                    width={545}
                    height={320}
                    // fill
                    quality={100}
                    className=" w-full h-full object-contain rounded-lg"
                  />
                  <div className="z-40 absolute top-2 left-4 w-[22px] h-[22px] rounded-full bg-primary hover:bg-red-500 ">
                    <button
                      className="text-red-700 hover:text-slate-200"
                      onClick={() => setNewImage("")}
                    >
                      <MdDeleteOutline size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // <UploadImg setMainImg={setNewImage} />
              <UploadImg
                onUpload={(url) => setNewImage(url)}
                buttonText="رفع الصورة الرئيسية"
              />
            )}
          </div>

          {/* Btn Send Update Data   */}
          <button
            className={` ${
              laudingSend === true
                ? "bg-gray-300 text-gray-700 cursor-move"
                : "bg-primary text-gray-200 "
            } px-4 py-2 my-2 cursor-pointer rounded-md w-full`}
            disabled={laudingSend === true}
            onClick={() => sendUpdateData()}
          >
            تعديل المدونة
          </button>
        </div>
      )}
    </>
  );
};

export default EditBlog;
