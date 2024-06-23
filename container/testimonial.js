import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const testimonialData = [
  {
    name: 'Tania Bhattacharya',
    image: 'https://placehold.co/300x400',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
  {
    name: 'Person 2',
    image: 'https://placehold.co/300x400',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
  {
    name: 'Person 3',
    image: 'https://placehold.co/300x400',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
  {
    name: 'Person 3',
    image: 'https://placehold.co/300x400',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
  {
    name: 'Person 3',
    image: 'https://placehold.co/300x400',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
];

const Testimonials = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-2xl font-semibold mb-4">Testimonials</h2>
      <Swiper
        className="swiper-container"
        slidesPerView={3}
        spaceBetween={5}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="row justify-content-center align-items-center position-relative">
              <div className="col-md-12 mb-4 d-flex justify-content-center position-relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                 
                  className="img-fluid border border-primary"
                />
                <div className="overlay bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 position-absolute inset-0">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.text}</p>
                    <button className="btn btn-primary mt-2">Video Testimonial</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                {/* Empty column for layout, adjust as needed */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
