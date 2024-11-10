import React from "react";

const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section
      className="
        w-full 
        flex flex-col 
        p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 
        border-b-2 border-solid border-dark dark:border-light 
        text-dark dark:text-light">
      <span
        className="
          font-semibold 
          text-lg sm:text-3xl md:text-4xl 
          text-accent dark:text-accentDark">
        I'm comfortable in...
      </span>
      <ul
        className="
          flex flex-wrap 
          mt-8 
          justify-center xs:justify-start">
        {SkillList.map((skill, index) => {
          return (
            <li
              key={index}
              className="
                inline-block 
                mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 
                py-2 xs:py-3 sm:py-4 lg:py-5 
                px-4 xs:px-6 sm:px-8 lg:px-12 
                text-base xs:text-lg sm:text-xl md:text-2xl 
                font-semibold dark:font-normal 
                capitalize 
                border-2 border-solid border-dark dark:border-light
                rounded 
                hover:scale-105 transition-all ease duration-200 
                cursor-pointer">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
