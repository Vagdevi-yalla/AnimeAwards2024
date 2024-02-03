import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.css";

const categories = [
  {
    title: "Best Action Anime",
    images: [
      "assets/nomination1.png",
      "assets/nomination2.png",
      "assets/nomination3.png",
      "assets/nomination4.png",
      "assets/nomination5.png",
      "assets/nomination6.png",
    ],
  },
  {
    title: "Best Comedy Anime",
    images: [
      "assets/nomination7.png",
      "assets/nomination8.png",
      "assets/nomination9.png",
      "assets/nomination10.png",
      "assets/nomination11.png",
      "assets/nomination12.png",
    ],
  },
  // Add more categories as needed
];

const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (currentIndex) => setCurrentSlide(currentIndex),
  };

  return (
    <div>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-slide">
            <p className="category-heading">{category.title}</p>
            <div className="category-images">
              {category.images.map((imageName, imageIndex) => (
                <img
                  key={imageIndex}
                  src={process.env.PUBLIC_URL + "/" + imageName}
                  alt={`Nomination ${imageIndex + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="slide-number">
        Page {currentSlide + 1} of {categories.length}
      </div>
    </div>
  );
};

export default CategorySlider;
