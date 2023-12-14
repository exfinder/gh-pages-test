import React, { useState } from "react";
import men_Ph from "../../images/men.png";
import women_Ph from "../../images/women.png";
import child_Ph from "../../images/child.png";
import { Button } from "../button";

export function CalcSection({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imageStyle = (image) => {
    if (selectedImage === image) {
      return "object-contain selected";
    }
    return "object-contain not-selected";
  };

  return (
    <>
      <div className="bg-grey w-full rounded-lg py px-24 py-8 mt-20 mb-8 sm:px-5">
        {children}
        <div className="flex justify-between gap-16">
          <div className="flex items-end">
            <button
              className="h-full flex items-end"
              onClick={() => handleImageClick("men")}
            >
              <img className={imageStyle("men")} src={men_Ph} alt="Men" />
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="h-full flex items-end"
              onClick={() => handleImageClick("child")}
            >
              <img className={imageStyle("child")} src={child_Ph} alt="Child" />
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="h-full flex items-end"
              onClick={() => handleImageClick("women")}
            >
              <img className={imageStyle("women")} src={women_Ph} alt="Women" />
            </button>
          </div>
        </div>
      </div>
      <Button>Розрахувати</Button>
    </>
  );
}
