"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        mt-12 
        text-base xs:text-lg sm:text-xl 
        font-in
        font-medium 
        leading-relaxed ">
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your email"
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone number"
        {...register("phone number ", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("project details", {})}
        rows={3}
        placeholder="My project is about..."
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0  placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        className="
          inline-block 
          mt-8 
          py-2 sm:py-3 px-6 sm:px-8 
          font-medium 
          capitalize 
          text-lg sm:text-xl 
          border-2 border-solid 
          border-dark dark:border-light
          rounded 
          cursor-pointer"
        value="send request"
      />
    </form>
  );
}
