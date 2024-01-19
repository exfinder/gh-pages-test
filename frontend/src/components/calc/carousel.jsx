import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export function Carousel({ children }) {
  const options = {
    items: 1,
    loop: false,
    dots: false,
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      {children}
    </OwlCarousel>
  );
}
