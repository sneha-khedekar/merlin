import React from "react";
import HeroSlider from "@/container/Home/heroSlider";
import Blog from "@/container/Home/blog";
import News from "@/container/Home/news";
import Testimonials from "@/container/Home/testimonial";
import Button from "@/components/button";
import RealEstateUsp from "@/container/Home/skyline";
import AddMoreToLife from "@/container/Home/AddMoreToLife";
import FeatureProject from "@/container/Home/featureProject";
import FounderDesk from "@/container/Home/FounderDesk";
const home = () => {
  return (
    <>
      <HeroSlider />
      <AddMoreToLife />

      <div className="bgsecondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-center mb-5 py-5">
                <button className="button story-button">Our Brand Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FounderDesk />
      <RealEstateUsp />
      <FeatureProject />

      <div className="background-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 justify-content-end d-flex">
              <Button color="btn-danger" text="COMMERCIAL" project="PROJECTS" />
            </div>
            <div className="col-md-4 col-12 justify-content-center d-flex">
              <Button
                color="btn-success"
                text="EXPLORE RESIDENTIAL"
                project="PROJECTS"
              />
            </div>
            <div className="col-md-4 col-12 justify-content-start d-flex">
              <Button
                color="btn-warning"
                text="EXPLORE OTHER "
                project="DEVELOPMENTS"
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <Blog />
    </>
  );
};

export default home;
