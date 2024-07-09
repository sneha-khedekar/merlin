import React from "react";
import BlogCard from "../../components/blogCard";
const BlogData = [
  {
    title: "Benefits of living in an Integrated...",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/benefits-rise-blog.png",
  },
  {
    title: "Investment in Real Estate...",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/Rise-beyond-4-walls.png",
  },
];

const Blog = () => (
  <div className="container mt-5">
    <h2 className="text-center mb-5 heading">Blogs</h2>
    <div className="row">
      {BlogData.map((article, index) => (
        <div key={index} className="col-md-6">
          <BlogCard {...article} />
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
