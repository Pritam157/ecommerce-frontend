import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouseldata } from "./MainCarouselData";

import "../../../index.css"

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

const MainCarousel = () => {
  const items = mainCarouseldata.map((value) => {
    return (
      <img
        src={value.image}
        alt="image"
        className="cursor-pointer"
        role="presentation"
      />
    );
  });
  return (
    <div className="slick-navbar ">
      <AliceCarousel
        items={items}
        autoPlay
        disableButtonsControls
        infinite
        autoPlayInterval={1000}
        style={{zIndex:-10}}
      />
    </div>
  );
};

export default MainCarousel;
