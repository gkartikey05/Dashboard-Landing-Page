"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import LOGO from './assets/logo.png'

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log("Logging in with:", data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    alert("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#c8c9cf]">
      <div className="flex flex-wrap items-center justify-between p-6 bg-white rounded-3xl shadow-lg w-[90%]">
        <div className="flex-grow relative w-[50%] pl-24 mb-[-4rem] -top-4">
          <Image alt="" src={LOGO} className="w-32 relative left-[135px]" />
          <h1 className="text-3xl font-medium mt-6 mb-1">Welcome Back! &#9996;&#127995;</h1>
          <p className="text-xs font-medium mb-6">Enter your credentials to access your account</p>

          {/* Form Field */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full mb-20">
            {/* Email Field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-9/12 px-4 py-3 border rounded-2xl focus:ring focus:border-blue-400 focus:outline-none placeholder:text-sm focus:ring-blue-200"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-[2px] mb-[-18px]">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="w-9/12 mb-1 flex items-center justify-between">
                <label className="text-sm mb-1 text-gray-700">
                  Password
                </label>
                {/* Forgot Password Button */}
                <div className="-mt-1">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline focus:outline-none"
                    onClick={() => alert("Forgot Password clicked")}
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-9/12 mb-4 px-4 py-3 border rounded-2xl focus:ring focus:border-blue-400 focus:outline-none placeholder:text-sm focus:ring-blue-200"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-[-16px]">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-9/12 font-light bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <span className="relative bottom-0 ml-20 text-gray-400">2022 Acme, All right Reserved</span>
        </div>

        <div className="w-[50%] pt-10 px-12 bg-blue-600 rounded-2xl ">
          <h1 className="w-[80%] text-3xl mb-3 text-white">The simplest way to manage your workforce</h1>
          <p className="text-xs mb-4 text-white">Enter your credentials to access your account</p>
          <img src="https://content.app-sources.com/s/28120195812648716/uploads/Nowa_strona_112023/Group_1413_1-0688071.png?format=webp" alt="" className="pb-10" />
        </div>
      </div>
    </div>
  );
}
