import React from "react";
import Skylineslider from "./skylineslider";

const RealEstateUsp = () => {
  return (
    <>
      <div className="bgsecondary pb-4 mb-5">
        <div className="container py-4 p-5 text-dark skyline mb-5">
          <div className="row align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <Skylineslider />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="mb-4 font-light">
                40 years of adding to skylines
              </h2>
              <div className="row">
                <div className="col-6 ">
                  <div className="flex-column align-items-start plr-5">
                    <img
                      src="/image/home/real-estate.svg"
                      alt="Real Estate Verticals"
                      className="mb-2"
                    />
                    <p className="text-muted">8 Real Estate Verticals</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="flex-column align-items-start plr-5">
                    <img
                      src="/image/home/projects-delivered.svg"
                      alt="Projects Delivered"
                      className="mb-2"
                    />
                    <p className="text-muted">150+ Projects Delivered</p>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="flex-column align-items-start plr-5">
                    <img
                      src="/image/home/development-experiences.svg"
                      alt="Development Experiences"
                      className="mb-2"
                    />
                    <p className="text-muted">
                      20 Mn. Sq. Ft. of Development Experiences
                    </p>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="flex-column align-items-start plr-5">
                    <img
                      src="/image/home/under-construction.svg"
                      alt="Under Construction"
                      className="mb-2"
                    />
                    <p className="text-muted">
                      10 Mn. Sq. Ft. Under Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstateUsp;
