// components/ArticleCard.js
import React from "react";

const BlogCard = ({ title, content, image }) => (
  <div className="card border-0">
    <img src={image} alt={title} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title p-0" style={{ color: "var(--primary-color)" }}>
        {title}
      </h5>
      <p className="card-text">{content}</p>
      <a
        href="#"
        className="subheading"
       
      >
      
      </a>
    </div>
  </div>
);

export default BlogCard;
