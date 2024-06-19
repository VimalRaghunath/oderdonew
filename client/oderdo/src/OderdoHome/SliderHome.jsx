import React from "react";
import SliderCard from "./SliderCard";

export default function SliderHome() {
  const cardsData = [
    {
      images: [
        "./src/assets/Slide1.jpg",
        "./src/assets/Slide2.jpg",
        "./src/assets/Slide3.jpg",
      ],
    },
    {
      images: [
        "./src/assets/Slide4.jpg",
        "./src/assets/Slide5.jpg",
        "./src/assets/Slide6.jpg",
      ],
    },
    {
      images:  [
        "./src/assets/Slide7.jpg",
        "./src/assets/Slide8.jpg",
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
          <SliderCard title={card.title} images={card.images} />
        </div>
      ))}
    </div>
  );
}
