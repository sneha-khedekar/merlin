import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { zoomIn } from "@/components/motion";
import Image from "next/image";
const AddMoreToLife = () => {
  return (
    <>
      <div className="addmorelife-text ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <h2 className="heading">Add more to life</h2>
                <p className="text-muted mt-4">
                  At Merlin, not only do we look to the future, but enable our
                  stakeholders, partners and customers to do so as well. The
                  future is about evolution. More success, more satisfaction,
                  more joy.
                </p>
                <p className="text-muted">
                  We believe in adding more to life, every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="addmorelife">
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <Card
                imageSrc="/image/add-more-life/tranformation.png"
                alt="Transformation"
                bgColor="bg-warning"
                text="Transformation"
              />
            </div>
            <div className="col-md-4">
              <Card
                imageSrc="/image/add-more-life/growth.png"
                alt="Growth"
                bgColor="bg-success"
                text="Growth"
              />
            </div>
            <div className="col-md-4">
              <Card
                imageSrc="/image/add-more-life/dependibility.png"
                alt="Dependability"
                bgColor="bg-danger"
                text="Dependability"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ imageSrc, alt, bgColor, text }) => {
  // console.log(imageSrc, "imageSrc");
  return (
    <div>
      <motion.div
        variants={zoomIn("left", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="card text-center border-0 position-relative">
          <div className="addtolife-overlay d-flex align-items-center justify-content-center">
            <p className="card-text m-0">{text}</p>
          </div>
          <span className="image-container">
            <Image
              layout="fill"
              src={imageSrc}
              alt={alt}
              className="image card-img-top img-fluid"
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AddMoreToLife;
