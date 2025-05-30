"use client";
import React, { useState } from "react";
import FormAddProduct from "@/utilit/Forms/FormAddProduct";
import UploadImg from "@/utilit/UploadImg";
// import UploadListImage from "@/utilit/UploadListImage";
import { useRouter } from "next/navigation";
import Loading from "@/utilit/Loading";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";

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

  const [selectedCategories, setSelectedCategories] = useState([]);

  const dataProduct = {
    title: form.title,
    title_en: form.title_en,
    category: selectedCategories,
    description: form.description,
    description_en: form.description_en,
    mainImg,
    listImage,
  };
  // console.log("list Image from add product :", listImage);
  const addProduct = async () => {
    // console.log("data sending:", dataProduct);
    try {
      setPending(true);
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataProduct),
      });
      if (res.status === 201) {
        setPending(false);
        setForm({ title: "", description: "" });
        setMainImg("");
        setListImage([]);
        setSelectedCategories([]);
        router.replace("/dashboard/product");
      }
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setPending(false);
    }
  };
  const handleDelete = (elm) => {
    setListImage((prevList) => prevList.filter((item) => item !== elm));
  };
  // console.log("main image :", mainImg);
  // console.log("list image :", listImage);

  return (
    <div className="w-full px-4 my-8 mdl:my-12 text-slate-200 overflow-y-auto">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-Title my-3 text-xl md:text-3xl font-semibold mb-8">
            إضافة المنتج
          </h1>
          <FormAddProduct
            form={form}
            setForm={setForm}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <div className="flex flex-col gap-4 min-h-[270px] p-4 bg-lightGray rounded-lg">
            <div className=" ">
              <h1 className=" my-3 text-xl mdl:text-2xl font-Title text-slate-200 ">
                صور المنتج
              </h1>

              {mainImg ? (
                <div className="">
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
                // <UploadImg setMainImg={setMainImg} />
                <UploadImg
                  onUpload={(url) => setMainImg(url)}
                  buttonText="رفع الصورة الرئيسية"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-4  ">
                {listImage.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-4">
                      {listImage.map((elm, ind) => (
                        <div
                          key={ind}
                          className=" relative border border-blue-800 w-[90px] h-[160px] rounded-lg"
                        >
                          <Image
                            src={elm}
                            alt="Additional Blog Image"
                            fill
                            quality={100}
                            className="object-cover"
                          />
                          <button
                            onClick={() => handleDelete(elm)}
                            className="flex justify-center items-center bg-red-100 w-7 h-7 rounded-full p-1 absolute top-2 left-2"
                          >
                            <AiTwotoneDelete
                              size={17}
                              className="text-red-700 hover:scale-110 transition-all duration-200 "
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* <UploadListImage
                  listImage={listImage}
                  setListImage={setListImage}
                /> */}

                {/* <UploadListImage
                  listImage={listImage}
                  setListImage={setListImage}
                /> */}

                <UploadImg
                  onUpload={(url) => {
                    setListImage((prevList) => {
                      if (!prevList.includes(url)) {
                        return [...prevList, url];
                      }
                      return prevList;
                    });
                  }}
                  buttonText="إضافة صورة جديدة"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="px-12 mdl:px-20 py-2 bg-green-300 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all"
              onClick={addProduct}
              disabled={pending}
            >
              {pending ? "جاري الإرسال..." : "إضافة المنتج"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
