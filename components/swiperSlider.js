import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperSlider = ({ articles }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {articles.map((article, index) => (
        <SwiperSlide key={index}>
          <div className="container mt-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 mb-4 d-flex justify-content-center">
                <img
                  src={article.image}
                  alt="News Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-4">
                <h3 className="heading mb-4">{article.title}</h3>
                <p className="text-muted mb-4">{article.content}</p>
                <button className="btn button p-0 rounded-0 text-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
