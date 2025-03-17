"use client";
import React, { useState } from "react";
import FormAddBlog from "@/utilit/Forms/FormAddBlog";
import UploadImg from "@/utilit/UploadImg";
// import UploadListImage from "@/utilit/UploadListImage";
import { useRouter } from "next/navigation";
import Loading from "@/utilit/Loading";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [mainImg, setMainImg] = useState("");
  const [listImage, setListImage] = useState([]);

  const [form, setForm] = useState({
    title: "",
    title_en: "",
    description: "",
    description_en: "",
  });

  const dataBlog = {
    title: form.title,
    title_en: form.title_en,
    description: form.description,
    description_en: form.description_en,
    mainImg,
    listImage,
  };

  const addBlog = async () => {
    try {
      setPending(true);
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataBlog),
      });
      if (res.status === 201) {
        setPending(false);
        setForm({ title: "", description: "" });
        setMainImg("");
        setListImage([]);
        router.replace("/dashboard/blog");
      }
    } catch (err) {
      console.error("Error adding blog:", err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full px-4 my-8 mdl:my-12 text-slate-200 overflow-y-auto">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-Title my-3 text-xl md:text-3xl font-semibold mb-8">
            إضافة مدونة
          </h1>
          <FormAddBlog form={form} setForm={setForm} />

          <div className="flex flex-col gap-4 min-h-[270px] p-4 bg-lightGray rounded-lg">
            <div className="flex bg-primary ">
              {mainImg ? (
                <div>
                  <h1 className="py-4 text-xl font-Title">صورة المدونة</h1>
                  <Image
                    src={mainImg}
                    alt="Main Blog Image"
                    width={180}
                    height={240}
                    quality={100}
                    className="w-full max-w-[180px] h-auto object-cover rounded-lg"
                  />
                </div>
              ) : (
                <UploadImg setMainImg={setMainImg} />
              )}
            </div>
            {/* <div className="flex-1">
              {listImage.length > 0 ? (
                <div>
                  <h1 className="py-4 text-xl font-Title">صور إضافية</h1>
                  <div className="flex flex-wrap gap-4">
                    {listImage.map((elm, ind) => (
                      <Image
                        key={ind}
                        src={elm}
                        alt="Additional Blog Image"
                        width={110}
                        height={160}
                        quality={100}
                        className="w-[90px] h-[160px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <UploadListImage
                  listImage={listImage}
                  setListImage={setListImage}
                />
              )}
            </div> */}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="px-12 mdl:px-20 py-2 bg-green-300 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all"
              onClick={addBlog}
              disabled={pending}
            >
              {pending ? "جاري الإرسال..." : "إضافة مدونة"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
