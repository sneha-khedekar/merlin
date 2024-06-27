// components/NewsComponent.js
import React from "react";
import SwiperSlider from "../components/swiperSlider";

const NewsComponent = () => {
  const articleData = [
    {
      title: "Heading One",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/image/news-media/news1.png",
    },
    {
      title: "Heading Two",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/image/news-media/news1.png",
    },
    {
      title: "Heading Three",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/image/news-media/news1.png",
    },
  ];

  return (
    <section className="news-section py-4">
      <div className="container mt-4">
        <h2 className="text-center heading">News & Media</h2>
        <SwiperSlider articles={articleData} />
      </div>
    </section>
  );
};

export default NewsComponent;
