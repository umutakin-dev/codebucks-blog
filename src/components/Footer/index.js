"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer
      className="
        mt-16 m-2 sm:m-10 
        rounded-2xl 
        bg-dark dark:bg-accentDark/90 
        flex flex-col items-center 
        text-light dark:text-dark">
      <h3
        className="
          mt-16 px-4
          font-medium dark:font-bold 
          text-center 
          capitalize 
          text-2xl sm:text-3xl lg:text-4xl">
        Interesting Stories | Updates | Guides
      </h3>
      <p
        className="
          w-full sm:w-3/5
          mt-5 px-4 
          text-center 
          font-light dark:font-medium 
          text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-fit sm:min-w-[384px]
          mt-6 mx-4 
          p-1 sm:p-2
          flex items-stretch 
          bg-light dark:bg-dark
          rounded ">
        {/* INPUT - TEXT - EMAIL */}
        <input
          type="text"
          placeholder="Enter Your Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="
            w-full
            mr-2 
            pb-1 pl-2 sm:pl-0 
            bg-transparent 
            text-dark 
            focus:border-dark focus:ring-0 
            border-0 border-b"
        />

        {/* INPUT - BUTTON - SUBMIT */}
        <input
          type="submit"
          className="
            px-3 sm:px-5 py-1
            bg-dark dark:bg-light
            text-light dark:text-dark 
            cursor-pointer 
            font-medium 
            rounded 
            "
        />
      </form>

      {/* SOCIAL MEDIA LINKS */}
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light">
          <GithubIcon
            className="
              fill-light dark:fill-dark
              hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div
        className="
          w-full 
          py-6 px-8 
          mt-16 md:mt-24 
          relative 
          font-medium 
          border-t border-solid border-light 
          flex flex-col md:flex-row 
          items-center justify-between">
        <span className="text-center">
          &copy; 2024 umutakin. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="
            text-center 
            underline
            my-5 md:my-0">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://umutakin.com"
            className="underline">
            umutakin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
