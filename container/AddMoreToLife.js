import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMoreToLife = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2 className="display-4 text-dark">Add more to life</h2>
        <p className="lead text-muted mt-4">
          We believe there is more to life than expectations. We believe there is more to life than
          compromises. We believe there is more to life than boundaries. We believe in adding more
          to life, every day.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <Card
            imageSrc="https://placehold.co/300x300"
            alt="Transformation"
            bgColor="bg-warning"
            text="Transformation"
          />
        </div>
        <div className="col-md-4">
          <Card
            imageSrc="https://placehold.co/300x300"
            alt="Growth"
            bgColor="bg-success"
            text="Growth"
          />
        </div>
        <div className="col-md-4">
          <Card
            imageSrc="https://placehold.co/300x300"
            alt="Dependability"
            bgColor="bg-danger"
            text="Dependability"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageSrc, alt, bgColor, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={alt} className="card-img-top" />
      <div className={`card-body text-center ${bgColor} text-white`}>
        <p className="card-text font-weight-bold">{text}</p>
      </div>
    </div>
  );
};

export default AddMoreToLife;
