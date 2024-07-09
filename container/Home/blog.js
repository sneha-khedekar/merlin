import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "@/components/blogCard";
import Button from "@/components/button";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const BlogData = [
  {
    title: "Benefits of living in an Integrated Township",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/benefits-rise-blog.png",
  },
  {
    title: "Merlin Rise: A Benchmark of Modern Lifestyle",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/Rise-beyond-4-walls.png",
  },
   {
    title: "Merlin Rise: A Benchmark of Modern Lifestyle",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/Rise-beyond-4-walls.png",
  },
  {
    title: "Merlin Rise: A Benchmark of Modern Lifestyle",
    content: "By Dustin Hansen | Nov 29, 2022",
    image: "/image/blog/Rise-beyond-4-walls.png",
  },
  // Add more blog data as needed
];

const Blog = () => (
  <>
    <div className="container mt-5">
      <h2 className="text-center mb-5 heading">Blogs</h2>
      <Swiper
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          spaceBetween={5}
          modules={[Navigation]}

      >
        {BlogData.map((article, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="explore-more p-4 justify-content-center align-items-center d-flex">
            <Button text="More Blogs" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Blog;
