"use client";
import React, { useState, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslations } from "next-intl";

import emailjs from "@emailjs/browser";

const FormContact = () => {
  const t = useTranslations();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    // console.log("mesg:", e);
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_fofofai",
        "template_h98qhdc",
        form.current,
        "5yYo5mqmn7r4S-LwP"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="flex flex-col font-Title">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex items-center justify-center"
      >
        <div className="px-2 py-4 flex flex-col justify-start ">
          <div className="flex flex-col gap-3">
            <div className=" flex flex-col md:flex-row gap-2">
              {/* client name */}
              <div className="md:w-1/2 flex flex-col gap-1">
                <p className="font-Title text-base font-semibold text-slate-200">
                  {t("contact.name")}
                </p>
                <input
                  name="name"
                  className=" placeholder:text-[14px] px-4 text-base  outline-none"
                  type="text"
                  //   placeholder="الإسم ..."
                />
              </div>

              {/* Phone Number */}
              <div className="md:w-1/2 flex flex-col gap-1">
                <p className="font-Title text-base font-semibold text-slate-200">
                  {t("contact.email")}
                </p>
                <input
                  name="email"
                  className=" placeholder:text-[14px] px-4 text-base  outline-none"
                  type="text"
                  //   placeholder="cc@cc.com"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-2">
              {/* subject */}
              <div className="md:w-1/2 flex flex-col gap-1">
                <p className="font-Title text-base font-semibold text-slate-200">
                  {t("contact.sub")}
                </p>
                <input
                  name="subject"
                  className=" placeholder:text-[14px] px-4 text-base  outline-none"
                  type="text"
                  //   placeholder="موضوع الرسالة  ..."
                />
              </div>

              {/* Phone Number */}
              <div className="md:w-1/2 flex flex-col gap-1">
                <p className="font-Title text-base font-semibold text-slate-200">
                  {t("contact.phone")}
                </p>
                <input
                  name="phone"
                  className=" placeholder:text-[14px] px-4 text-base  outline-none"
                  type="text"
                  //   placeholder="+00 XXXX"
                />
              </div>
            </div>

            {/* message */}
            <div className=" flex flex-col gap-1">
              <p className="text-base font-semibold text-slate-200">
                {t("contact.messege")}
              </p>
              <textarea
                rows={6}
                name="message"
                className=" placeholder:text-[16px] px-4 text-base font-medium placeholder:font-normal  outline-none"
                type="text"
                // placeholder="ماتود إخبارنا به  .... "
              />
            </div>
            <div className="">
              <button
                type="submit"
                // onSubmit={sendEmail}
                className="w-full flex justify-center items-center bg-primary/80 hover:bg-primary px-3 py-1 text-gray-900  duration-200"
              >
                <span className="px-2">{t("contact.send")}</span>
                <FaTelegramPlane size={20} className="text-black" />
              </button>
            </div>

            {success && (
              <span className="text-green-600 font-semibold">
                شكرا ، لقد تم إرسال الرسالة .
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                عذرا لم يتم إرسال الرسال ، أعد مرة أخىى .
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
