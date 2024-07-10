import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import custom CSS

export default function HeroSlider() {
  const slides = [
    {
      image: "/image/hero/banner1.png",
    },
    {
      image: "/image/hero/02.png",
    },
    {
      image: "/image/hero/03.png",
    },
    {
      image: "/image/hero/04.png",
    },
    {
      image: "/image/hero/05.png",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content hero">
              <div
                className="background"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
