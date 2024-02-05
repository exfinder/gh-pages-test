import React from "react";
import { Carousel } from "react-responsive-carousel";

export function Slider({ children, onChange, selectedItem }) {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        onChange={onChange}
        selectedItem={selectedItem}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <div className="carousel-arrow">
                <i className="fa-solid fa-angle-left"></i>
              </div>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <div className="carousel-arrow">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          );
        }}
      >
        {children}
      </Carousel>
    </>
  );
}
