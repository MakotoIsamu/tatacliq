import React, { useRef } from "react";
import image1 from "../assets/image/SealTheDeal/51869120593950.avif";
import image2 from "../assets/image/SealTheDeal/51869120659486.avif";
import image3 from "../assets/image/SealTheDeal/51889190567966.avif";
import image4 from "../assets/image/SealTheDeal/51889190633502.avif";
import image5 from "../assets/image/SealTheDeal/51889190699038.avif";
import image6 from "../assets/image/SealTheDeal/51889190764574.avif";
import image7 from "../assets/image/SealTheDeal/51889190830110.avif";
import image8 from "../assets/image/SealTheDeal/51889190895646.avif";
import image9 from "../assets/image/SealTheDeal/51889190961182.avif";
import image10 from "../assets/image/SealTheDeal/51889191026718.avif";
import image11 from "../assets/image/SealTheDeal/51889191092254.avif";
import image12 from "../assets/image/SealTheDeal/51889191157790.avif";
import image13 from "../assets/image/SealTheDeal/51889191223326.avif";
import image14 from "../assets/image/SealTheDeal/51889191288862.avif";
import image15 from "../assets/image/SealTheDeal/51889191354398.avif";
import image16 from "../assets/image/SealTheDeal/51889191419934.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SealTheDeal = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const nextSlider1 = () => slider1Ref.current.slickNext();
  const prevSlider1 = () => slider1Ref.current.slickPrev();
  const nextSlider2 = () => slider2Ref.current.slickNext();
  const prevSlider2 = () => slider2Ref.current.slickPrev();

  return (
    <>
      <div>
        <h2 className="text-4xl md:text-6xl text-center p-10 md:p-20 font-bold">
          Seal The Deal
        </h2>

        {/* Controls for First Slider */}
        <div className="flex justify-end items-center p-4 max-w-screen-xl mx-auto">
          <button
            onClick={prevSlider1}
            className="px-4 py-2 rounded-l-full cursor-pointer bg-gray-200 border-black"
          >
            Prev
          </button>
          <button
            onClick={nextSlider1}
            className="px-4 py-2 rounded-r-full cursor-pointer bg-gray-200 border-black"
          >
            Next
          </button>
        </div>

        {/* First Slider */}
        <div className="flex justify-center items-center">
          <Slider ref={slider1Ref} {...settings} className="w-full max-w-screen-xl">
            <div className="px-2">
              <img src={image1} alt="Focus Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image2} alt="Focus Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image3} alt="Focus Image 3" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image4} alt="Focus Image 4" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image5} alt="Focus Image 5" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image6} alt="Focus Image 6" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image7} alt="Focus Image 7" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image8} alt="Focus Image 8" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>

        {/* Controls for Second Slider */}
        <div className="flex justify-end items-center p-4 max-w-screen-xl mx-auto">
          <button
            onClick={prevSlider2}
            className="px-4 py-2 rounded-l-full cursor-pointer bg-gray-200 border-black"
          >
            Prev
          </button>
          <button
            onClick={nextSlider2}
            className="px-4 py-2 rounded-r-full cursor-pointer bg-gray-200 border-black"
          >
            Next
          </button>
        </div>

        {/* Second Slider */}
        <div className="flex justify-center items-center">
          <Slider ref={slider2Ref} {...settings} className="w-full max-w-screen-xl">
            <div className="px-2">
              <img src={image9} alt="Focus Image 9" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image10} alt="Focus Image 10" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image11} alt="Focus Image 11" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image12} alt="Focus Image 12" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image13} alt="Focus Image 13" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image14} alt="Focus Image 14" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image15} alt="Focus Image 15" className="w-full h-full object-cover" />
            </div>
            <div className="px-2">
              <img src={image16} alt="Focus Image 16" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SealTheDeal;
