"use client";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const FormAddBlog = ({
  form,
  setForm,
  selectedCategories,
  setSelectedCategories,
}) => {
  const caty = ["deskApp", "mobileApp", "webApp", "design"]; // الفئات المحددة مسبقًا
  const handleAddCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-4 my-4">
      <div className=" my-4 flex flex-col xl:flex-row gap-2">
        <input
          className="w-full px-4 py-2 text-gray-950 focus:outline-none"
          placeholder="عنوان المنتج بالعربية"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 text-gray-950 focus:outline-none"
          placeholder="عنوان المنتج بالإنجليزية"
          type="text"
          name="title_en"
          value={form.title_en}
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
            defaultValue=""
          >
            <option>إختر فئة المنتج ...</option>
            {caty.map((category) => (
              <option
                key={category}
                value={category}
                disabled={selectedCategories.includes(category)}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* عرض الفئات المختارة */}
        <div className="flex flex-wrap gap-2 h-[40px]">
          {selectedCategories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2 px-3 py-1 text-[16px] font-Title font-bold rounded-full text-gray-700 bg-slate-200 "
            >
              <p className="text-red-400">{category}</p>
              <button
                onClick={() => handleRemoveCategory(category)}
                className="ml-2 text-red-500 hover:text-red-700 w-8 h-8 rounded-full bg-slate-500"
              >
                <AiTwotoneDelete size={18} />
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
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            rows={4}
            className="w-full px-4 py-2 text-gray-950 focus:outline-none"
            placeholder="وصف المنتج  بالإنجليزية"
            name="description_en"
            value={form.description_en}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default FormAddBlog;
