import React from "react";
import { SwiperNavigation } from "swiper/react";
import "swiper/css/navigation";

const NavigationArrows = () => {
  return (
    <SwiperNavigation
      nextEl={
        <div className="swiper-button-next">
          <img src="/path/to/next-arrow.png" alt="Next" />
        </div>
      }
      prevEl={
        <div className="swiper-button-prev">
          <img src="/path/to/prev-arrow.png" alt="Previous" />
        </div>
      }
    />
  );
};

export default NavigationArrows;
