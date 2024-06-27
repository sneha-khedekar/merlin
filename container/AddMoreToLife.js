import React from "react";

const AddMoreToLife = () => {
  return (
    <>
      <div className="addmorelife-text">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">Add more to life</h2>
            <p className="text-muted mt-4">
              We believe there is more to life than expectations. We believe
              there is more to life than <br />
              compromises. We believe there is more to life than boundaries. We
              believe in adding more to life, every day.
            </p>
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
  return (
    <div className="card text-center border-0 position-relative">
      <div className="addtolife-overlay d-flex align-items-center justify-content-center">
        <p className="card-text m-0">{text}</p>
      </div>
      <img src={imageSrc} alt={alt} className="card-img-top" />
    </div>
  );
};

export default AddMoreToLife;
