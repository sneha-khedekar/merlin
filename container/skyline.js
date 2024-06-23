import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const sharedClasses = {
  button: 'btn btn-light p-2 rounded-circle shadow-sm',
  text: 'text-muted',
  image: 'mb-2',
};

const RealEstateUsp = () => {
  return (
    <div className="container py-4 p-5 bg-light text-dark">
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src="https://placehold.co/500x400"
            alt="Real Estate Image"
            className="img-fluid rounded"
          />
  
        </div>
        <div className="col-md-7 text-center text-md-start">
          <h2 className="mb-4 ml-5 text-primary">
            40 years of adding to skylines
          </h2>
          <div className="row">
            <div className="col-6 mb-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Real Estate Verticals"
                  className={sharedClasses.image}
                />
                <p className={sharedClasses.text}>8 Real Estate Verticals</p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Projects Delivered"
                  className={sharedClasses.image}
                />
                <p className={sharedClasses.text}>150+ Projects Delivered</p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Development Experiences"
                  className={sharedClasses.image}
                />
                <p className={sharedClasses.text}>20 Mn. Sq. Ft. of Development Experiences</p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Under Construction"
                  className={sharedClasses.image}
                />
                <p className={sharedClasses.text}>10 Mn. Sq. Ft. Under Construction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateUsp;
