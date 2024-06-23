import React from 'react'
import BlogCard from '../components/blogCard'
const BlogData = [
    {
      title: 'Benefits of living in an Integrated...',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Investment in Real Estate...',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://placehold.co/600x400',
    },
    {
      title: '5 Strategies That Real Estate...',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://placehold.co/600x400',
    },
  ];
  
  const Blog = () => (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Blogs</h2>
      <div className="row">
        {BlogData.map((article, index) => (
          <div key={index} className="col-md-4">
            <BlogCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );

export default Blog