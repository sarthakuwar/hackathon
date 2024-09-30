'use client';

import React from 'react';
import Slider from 'react-slick';

const Page = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Video Carousel</h1>

      {/* Carousel Container */}
        {/* First Card */}
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Watch this tutorial 2</h2>
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Tutorial 2"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Page;