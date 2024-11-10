import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div
      className="
        py-4 px-0 md:px-10 sxl:px-20 
        mt-10 mx-10 
        text-dark dark:text-light
        font-medium 
        border-t-2 border-b-2 border-solid 
        border-dark dark:border-light
        flex 
        items-start flex-wrap">
      {categories.map((category) => (
        <Category
          key={category}
          link={`/categories/${category}`}
          name={category}
          active={currentSlug === slug(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
