import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { zoomIn } from "@/components/motion";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonialData = [
  {
    name: "Tania Bhattacharya",
    image: "/image/home/testimonial/testimonial-1.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    link: "View Video Testimonial",
  },
  {
    name: "Tanay Basu",
    image: "/image/home/testimonial/testimonial-2.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    link: "View Video Testimonial",
  },
  {
    name: "Ananya Bahuguna",
    image: "/image/home/testimonial/testimonial-3.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    link: "View Video Testimonial",
  },
  {
    name: "Person 3",
    image: "/image/home/testimonial/testimonial-1.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    link: "View Video Testimonial",
  },
  {
    name: "Person 3",
    image: "/image/home/testimonial/testimonial-1.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    link: "View Video Testimonial",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container py-5">
        <h2 className="text-center heading">Testimonials</h2>
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="row justify-content-center align-items-center position-relative">
                <div className="col-md-12 mb-4 d-flex justify-content-center position-relative">
                  <motion.div
                    variants={zoomIn("left", 0.5)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <div className="testimonial-img">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="img-fluid border border-primary"
                      />
                      <div className="testimonial-img-overlay">
                        <div className="text-white p-5 pt-5">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm">{testimonial.text}</p>
                          <h5 className="text-sm">{testimonial.link}</h5>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
