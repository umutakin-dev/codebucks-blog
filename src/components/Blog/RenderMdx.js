"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MdxContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="
        max-w-max 
        col-span-12 lg:col-span-8 
        font-in 
        prose sm:prose-base md:prose-lg 
      prose-blockquote:bg-accent/20 
      dark:prose-blockquote:bg-accentDark/20 
        prose-blockquote:p-2 
        prose-blockquote:px-6 
      prose-blockquote:border-accent
      dark:prose-blockquote:border-accentDark
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg         
      prose-li:marker:text-accent
      dark:prose-li:marker:text-accentDark
        dark:prose-invert
        first-letter:text-3xl
        sm:first-letter:text-5xl">
      <MdxContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
