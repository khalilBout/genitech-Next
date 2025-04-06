"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Ui/Loading";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import UploadImg from "@/utilit/UploadImg";
// import UploadListImage from "@/utilit/UploadListImage";

const EditProduct = ({ productData }) => {
  const id = productData?._id;
  const router = useRouter();
  const [laudingSend, setLaudingSend] = useState(false);

  const [form, setForm] = useState({
    title: productData.title,
    title_en: productData.title_en,
    description: productData.description,
    description_en: productData.description_en,
    // mainImg: blogData.mainImg,
  });
  const [newImage, setNewImage] = useState(productData.mainImg);
  const [newListImage, setListNewImage] = useState([...productData.listImage]);
  const [newCty, setNewCty] = useState([...productData.category]);

  const dataUpdated = {
    ...form,
    mainImg: newImage,
    category: newCty,
    listImage: newListImage,
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const caty = ["deskApp", "mobileApp", "webApp", "design"]; // الفئات المحددة مسبقًا
  const handleAddCategory = (category) => {
    if (!newCty.includes(category)) {
      setNewCty([...newCty, category]);
    }
  };

  const handleRemoveCategory = (category) => {
    setNewCty(newCty.filter((c) => c !== category));
  };
  const handleDelete = (elm) => {
    setListNewImage((prevList) => prevList.filter((item) => item !== elm));
  };
  // Sending Update Data
  const sendUpdateData = async () => {
    // console.log("data productprotffoiol apdate : ", dataUpdated);
    try {
      setLaudingSend(true);
      const res = await fetch(`/api/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(dataUpdated),
      });
      if (res.status === 200) {
        // toast.success("Product is Updated.");
        router.push("/dashboard/product");
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
                placeholder="عنوان المنتج بالعربية"
                type="text"
                name="title"
                // value={form.title}
                defaultValue={productData.title}
                onChange={handleChange}
              />
              <input
                className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                placeholder="عنوان المنتج بالإنجليزية"
                type="text"
                name="title_en"
                // value={form.title_en}
                defaultValue={productData.title_en}
                onChange={handleChange}
              />
            </div>
            {/* caty  */}
            <div className=" my-4 flex items-center justify-start flex-wrap gap-2">
              {/* <label className="text-[18px] text-slate-200 font-bold mb-2">
                    اختر فئات المنتج:
                  </label> */}

              <div className="mx-4 flex gap-2 h-[40px] ">
                <select
                  onChange={(e) => handleAddCategory(e.target.value)}
                  className="p-2 border text-gray-900 min-w-[120px] text-[16px] font-medium"
                  //   defaultValue=""
                  defaultValue={productData.category}
                >
                  <option>إختر فئة المنتج ...</option>
                  {caty.map((category) => (
                    <option
                      key={category}
                      value={category}
                      disabled={newCty.includes(category)}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              {/* عرض الفئات المختارة */}
              <div className="flex flex-wrap gap-2 h-[40px]">
                {newCty.map((category, index) => (
                  <div
                    key={index}
                    className="text-slate-900 flex justify-between items-center gap-2 px-3 py-1 text-[16px] font-Title font-bold rounded-full bg-slate-200 "
                  >
                    <p className="text-slate-900">{category}</p>
                    <button
                      onClick={() => handleRemoveCategory(category)}
                      className="ml-2 text-red-500 hover:text-red-700 w-8 h-8 rounded-full bg-slate-500"
                    >
                      <MdDeleteOutline size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                  placeholder="وصف المنتج  بالعربية"
                  name="description"
                  //   value={form.description}
                  defaultValue={productData.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 text-gray-950 focus:outline-none"
                  placeholder="وصف المنتج  بالإنجليزية"
                  name="description_en"
                  //   value={form.description_en}
                  defaultValue={productData.description_en}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>

          {/* image box  */}
          <div className="flex justify-center items-center ">
            {newImage ? (
              <div className="flex flex-col gap-2 justify-center items-center text-slate-200">
                <h1 className="py-4 text-xl font-Title">صورة المنتج </h1>
                <div className=" relative bg-slate-200 z-40">
                  <Image
                    src={newImage}
                    alt="Main Blog Image"
                    width={480}
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
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-4  ">
              {newListImage.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-4">
                    {newListImage.map((elm, ind) => (
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
                          <MdDeleteOutline
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
                listImage={newListImage}
                setListImage={setListNewImage}
              /> */}

              {/* <UploadListImage
                listImage={newListImage}
                setListImage={setListNewImage}
              /> */}

              <UploadImg
                onUpload={(url) => {
                  setListNewImage((prevList) => {
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
            تعديل المنتج
          </button>
        </div>
      )}
    </>
  );
};

export default EditProduct;
