import React, { useRef } from "react";
import image1 from "../assets/image/InFocus/52677983272990.avif";
import image2 from "../assets/image/InFocus/52677983338526.avif";
import image3 from "../assets/image/InFocus/52677983404062.avif";
import image4 from "../assets/image/InFocus/52677983469598.avif";
import coupon1 from "../assets/image/InFocus/coupons/50040038359070.avif";
import coupon2 from "../assets/image/InFocus/coupons/50063519580190.avif";
import coupon3 from "../assets/image/InFocus/coupons/50074650869790.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InFocus = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Enable center mode to create gaps
    centerPadding: "20px", // Add padding around the centered slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const prev = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <div>
        <h2 className="text-4xl md:text-6xl text-center p-10 md:p-20 font-bold">
          In Focus: Westside
        </h2>
        <div className="flex justify-end items-center p-4 max-w-screen-xl mx-auto">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-l-full cursor-pointer bg-gray-200 border-black"
          >
            {" "}
            Prev{" "}
          </button>
          <button
            onClick={next}
            className="px-4 py-2 rounded-r-full cursor-pointer bg-gray-200 border-black"
          >
            {" "}
            Next{" "}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="w-full max-w-screen-xl"
          >
            <div className="px-2">
              <img
                src={image1}
                alt="Focus Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="px-2">
              <img
                src={image2}
                alt="Focus Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2">
              <img
                src={image3}
                alt="Focus Image 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2">
              <img
                src={image4}
                alt="Focus Image 4"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center py-6 space-y-4 md:space-y-0">
          <img src={coupon1} alt="Coupon 1" className="w-full md:w-1/3" />
          <img src={coupon2} alt="Coupon 2" className="w-full md:w-1/3" />
          <img src={coupon3} alt="Coupon 3" className="w-full md:w-1/3" />
        </div>
      </div>
    </>
  );
};

export default InFocus;
