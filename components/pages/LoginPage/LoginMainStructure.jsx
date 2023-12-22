"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { IoEye, IoEyeOff, IoLogoGoogle } from "react-icons/io5";
import Link from "next/link";

const LoginMainStructure = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="min-h-screen gradient-bg">
      <div className="wrapper w-full min-h-[90vh] flex items-center justify-center">
        <div className="bg-white p-5 max-w-md w-full rounded-lg shadow-lg">
          <h4 className="text-center font-semibold text-primary">
            Welcome back!
          </h4>
          <h1 className="text-center text-2xl font-bold text-primary">
            Unique Pathology <br />
            Customer Portal
          </h1>
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <Input
                color="primary"
                type="email"
                variant="underlined"
                label="Email"
                autoComplete={false}
                className="max-w-md w-full"
                {...register("user_email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="mt-2">
                {errors.user_email?.type === "pattern" && (
                  <span className="text-xs text-red-500">
                    {errors.user_email.message}
                  </span>
                )}
                {errors.user_email?.type === "required" && (
                  <span className="text-xs text-red-500">
                    {errors.user_email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="w-full">
              <Input
                color="primary"
                type={isVisible ? "text" : "password"}
                variant="underlined"
                label="Password"
                className="w-full max-w-md"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <IoEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                {...register("user_password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <label className="flex justify-between mt-2">
                {errors.user_password?.type === "minLength" && (
                  <span className="text-xs text-red-500">
                    {errors.user_password.message}
                  </span>
                )}
                {errors.user_password?.type === "required" && (
                  <span className="text-xs text-red-500">
                    {errors.user_password.message}
                  </span>
                )}
                <Link
                  href="/reset-password"
                  className="text-xs font-semibold hover:underline text-right"
                >
                  Forgot Password?
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              color="primary"
              className="text-white font-semibold mt-5 w-full"
            >
              Log In
            </Button>
          </form>
          <span className="relative flex justify-center my-5">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6 font-semibold text-primary">
              OR
            </span>
          </span>

          <Button
            color="primary"
            variant="bordered"
            className="text-primary font-semibold w-full"
          >
            <span className="flex items-center gap-2">
              <IoLogoGoogle className="text-xl" />
              Continue with Google
            </span>
          </Button>

          <p className="text-sm text-center mt-5">
            Do not have an account? Then{" "}
            <Link
              href="/create-a-new-account"
              className="underline underline-offset-2 font-semibold"
            >
              create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginMainStructure;
