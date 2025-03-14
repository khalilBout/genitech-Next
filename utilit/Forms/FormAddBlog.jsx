"use client";
import React from "react";

const FormAddBlog = ({ form, setForm }) => {
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
          placeholder="عنوان المدونة بالعربية"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 text-gray-950 focus:outline-none"
          placeholder="Blog Title in English"
          type="text"
          name="title_en"
          value={form.title_en}
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
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            rows={4}
            className="w-full px-4 py-2 text-gray-950 focus:outline-none"
            placeholder="Blog Content in English"
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
