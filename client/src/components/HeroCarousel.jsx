import React from "react";
import Slider from "react-slick";
import Banner1 from "../assets/image/slides/61695293456414.avif";
import Banner2 from "../assets/image/slides/61699652091934.avif";
import Banner3 from "../assets/image/slides/61699652157470.avif";
import Banner4 from "../assets/image/slides/61699652223006.avif";
import Banner5 from "../assets/image/slides/61699652288542.avif";
import Banner6 from "../assets/image/slides/61699652419614.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Added autoplay for a smoother experience
  };

  return (
    <div className="flex items-center justify-center py-6">
      <Slider {...settings} className="w-full max-w-screen-xl">
        {[Banner1, Banner2, Banner3, Banner4, Banner5, Banner6].map((banner, index) => (
          <div key={index} className="h-80">
            <img src={banner} alt={`Banner ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
