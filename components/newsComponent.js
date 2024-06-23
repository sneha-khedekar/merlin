// components/NewsComponent.js
import React from 'react';
import SwiperSlider from '../components/swiperSlider';

const NewsComponent = () => {
  const articleData = [
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

  return (
    <section className="news-section py-4">
      <div className="container mt-4">
        <h2 className="text-center text-2xl font-semibold mb-4">News & Media</h2>
        <SwiperSlider articles={articleData} />
      </div>
    </section>
  );
};

export default NewsComponent;
