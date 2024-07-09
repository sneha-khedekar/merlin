import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
const Skylineslider = () => {
  const skylineslides = [
    {
      image: "/image/home/azure.png",
    },
    {
      image: "/image/home/azure.png",
    },
    {
      image: "/image/home/azure.png",
    },
    {
      image: "/image/home/azure.png",
    },
    {
      image: "/image/home/azure.png",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {skylineslides.map((slide, index) => (
          <SwiperSlide>
            {" "}
            <img
              src={slide.image}
              alt="News Image"
              className="img-fluid border-primary"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Skylineslider;
