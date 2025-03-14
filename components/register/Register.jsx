"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  // ============= Initial State Start here =============
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    name,
    email,
    password,
  };

  // ============= Error Msg  =================
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setName(e.target.value);
    setErrUsername("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      setErrUsername("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid email");
      }
    }
    if (!password) {
      setErrPassword("Create a password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }

    // ============== Getting the value ==============
    if (
      name &&
      email &&
      EmailValidation(email) &&
      password &&
      password.length >= 6
    ) {
      try {
        console.log("register user from FE:", user);
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status === 400) {
          setName("");
          setEmail("");
          setPassword("");
          router.refresh();
          setErrorMsg("email exist..");
        }
        if (response.status === 201) {
          setName("");
          setEmail("");
          setPassword("");
          router.push("/login");
        }
      } catch (error) {
        console.log("Signup failed", error.message);
      }
    }
  };
  return (
    <div dir="rtl" className="w-[450px] h-[580px] mt-24">
      <form className="w-full h-full flex items-center justify-center">
        <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start ">
          <h1 className="font-Title text-slate-200 text-center font-semibold text-2xl mdl:text-3xl mb-4">
            إنشاء حساب جديد
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-.5">
              <p className="font-Title text-slate-200 py-1 text-base font-semibold">
                الإسم
              </p>
              <input
                onChange={handleName}
                value={name}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. John Doe"
              />
              {errUsername && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errUsername}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <p className="font-Title text-slate-200 py-1 text-base font-semibold">
                البريد الإلكتروني
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-.5">
              <p className="font-Title text-slate-200 py-1 text-base font-semibold">
                الرقم السري
              </p>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="password"
                placeholder="Create password"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>

            <button
              onClick={handleSignUp}
              // className={`${
              //   checked
              //     ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
              //     : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
              // }  w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
              className=" font-Title font-semibold bg-slate-400/70 hover:bg-black hover:text-white cursor-pointer w-full text-gray-100 text-base h-10 rounded-md duration-300"
            >
              إنشاء الحساب
            </button>
            {errorMsg && (
              <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                <span className="font-bold italic mr-1">!</span>
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
