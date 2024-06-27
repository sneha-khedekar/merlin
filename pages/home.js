import React from "react";
import Blog from "@/container/blog";
import News from "@/container/news";
import Testimonials from "@/container/testimonial";
import Button from "@/components/button";
import HeroSlider from "@/components/heroSlider";
import RealEstateUsp from "@/container/skyline";
import AddMoreToLife from "@/container/AddMoreToLife";
import FeatureProject from "@/components/featureProject";
// import FeatureProjectSlider from "@/container/featureProjectSlider";
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
      <News />
      <Blog />
    </>
  );
};

export default home;
