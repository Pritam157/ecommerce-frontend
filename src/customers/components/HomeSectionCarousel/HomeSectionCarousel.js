import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const HomeSectionCarousel = ({ data, sectionName,redirect }) => {
  // const [activeIndex, setActiceIndex] = useState(0);
  const nevigate=useNavigate();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },

  };

  // const slidePrev = () => setActiceIndex(activeIndex - 1);
  // const slideNext = () => setActiceIndex(activeIndex + 1);

  // const syncActiveindex = ({ item }) => {
  //   return setActiceIndex(item);
  // };

  const items = data.slice(0, 10).map((value) => <HomeSectionCard info={value} redirect={redirect} />);

  return (
    <div >
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          // activeIndex={activeIndex}
          // disableButtonsControls
          responsive={responsive}
          disableDotsControls
          // onSlideChange={syncActiveindex}
          renderPrevButton={(isDisabled) => {
            return  <Button 
            style={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              // border:"2px solid black"

            }}
            variant="contained"
            className="z-50 shadow-lg hover:bg-blue-300 font-semibold hover:text-white py-2 px-5 border border-black hover:border-transparent rounded "
            // aria-label="next"
            // onClick={slideNext}
          >
            <ArrowForwardIos className="hover:text-blue-500" style={{ transform: "rotate(90deg)"  }} />
          </Button>
          }}
          renderNextButton={({isDisabled}) => {
            return <Button
            style={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            // variant="contained"
            className="z-50 shadow-lg hover:bg-blue-300 font-semibold hover:text-white py-2 px-5 border border-black hover:border-transparent rounded"
            // aria-label="next"
            // onClick={slidePrev}
          >
            <ArrowForwardIos style={{ transform: "rotate(-90deg)" }} />
          </Button>
          }}
        />

        {/* {activeIndex !== items.length - 5 && 
          <Button
            style={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            // variant="contained"
            className="z-50"
            // aria-label="next"
            // onClick={slidePrev}
          >
            <ArrowForwardIos style={{ transform: "rotate(-90deg)" }} />
          </Button>
        }

        {activeIndex !== 0 && 
          <Button
            style={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            variant="contained"
            className="z-50"
            // aria-label="next"
            // onClick={slideNext}
          >
            <ArrowForwardIos style={{ transform: "rotate(90deg)" }} />
          </Button>
        } */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
