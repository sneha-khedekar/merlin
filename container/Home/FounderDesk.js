import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PrimaryLine from "@/components/primaryLine";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { fadeIn } from "@/components/motion";
const backgroundImage = "https://placehold.co/1920x1080";

const FounderDesk = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="founderdesk"
      >
        <SwiperSlide>
          <div
            className="position-relative w-100 vh-100 bg-cover bg-center d-flex align-items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <motion.div
              variants={fadeIn("right")}
              initial={"hidden"}
              animate={"show"}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="text-white mb-3">
                        From the Founder's Desk
                      </h2>
                      <p className="text-white fst-italic mb-3">
                        “As we evolve, our vision extends beyond just bringing
                        exceptional spaces to life”
                      </p>
                      <h6 className="text-white">
                        Mr. Sushil Mohta, Founder & Chairman
                      </h6>
                      <PrimaryLine />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FounderDesk;
