import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = ({ title, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden m-6">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="card-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
