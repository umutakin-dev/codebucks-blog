import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugifiedTag = slug(tag);
      if (!allCategories.includes(slugifiedTag)) {
        allCategories.push(slugifiedTag);
      }
      if (params.slug === "all") {
        return true;
      }

      return slugifiedTag == params.slug;
    });
  });

  // return <div>Category Name: {params.slug}</div>;
  return (
    <article>
      <div>
        <h1>#{params.slug}</h1>
        <span>Discover more categories and expand your knowledge!</span>
      </div>
    </article>
  );
};

export default CategoryPage;
