import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function FeatureProjectSlider() {
  const Projectslides = [
    {
      desktopImage: "/image/home/featureproj.png",
      mobileImage: "/image/home/featureproj-mobile.png",
    },
    {
      desktopImage: "/image/home/featureproj.png",
      mobileImage: "/image/home/featureproj-mobile.png",
    },
  ];
  return (
    <>
      <div className="feature-project">
        <div className="container">
          <div className="text-center">
            <h2 className="heading mb-5">Featured Projects</h2>
          </div>
        </div>
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
          className="featureproject-slider"
        >
          {Projectslides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="position-relative ">
                <img
                  src={slide.desktopImage}
                  alt="Real estate banner"
                  className="w-100 h-100 d-none d-md-block"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src={slide.mobileImage}
                  alt="Real estate banner"
                  className="w-100 h-100 d-block d-md-none"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  }}
                ></div>
                <div className="position-absolute bottom-0 text-white p-3 w-100 d-flex flex-column justify-content-end mb-50">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center gap-3">
                          <span className="fw-bold fs-5">
                            Serenia
                            <p className="fw-light">BT Road, Bonhooghly</p>
                          </span>
                          <p className="mt-2">
                            INR 36 lac onwards* <br /> Possession 2026
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-md-end justify-content-start">
                        <button className="btn button">ENQUIRE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
