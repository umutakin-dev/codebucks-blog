import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugifiedTag = slugger.slug(tag);
        if (!categories.includes(slugifiedTag)) {
          categories.push(slugifiedTag);
          paths.push({ slug: slugifiedTag });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

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

  return (
    <article
      className="
        mt-12 
        text-dark dark:text-light 
        flex flex-col">
      <div
        className="
          px-5 sm:px-10 md:px-24 sxl:px-32 
          flex flex-col">
        <h1
          className="
          mt-6 
          font-semibold 
          text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories
        categories={allCategories}
        currentSlug={params.slug}
      />

      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          grid-rows-2 
          gap-16 
          mt-5 sm:mt-10 md:mt-24 
          px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
