import React, { useState } from "react";
import { Button } from "../button/Button";
import { Person } from "./Person";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";

const personTypes = ["men", "women", "child"];
const bodyParts = ["none", "head", "top", "lower"];
const translateBodyParts = {
  none: "Категорії",
  head: "Головний убір",
  top: "Верхня частина тіла",
  lower: "Нижня частина тіла",
};

const brands = ["none", "Zara", "6pm", "YOOX", "allegro", "Pull&Bear", "asos"];
const translateBrands = {
  none: "Бренд",
  Zara: "Zara",
  "6pm": "6pm",
  YOOX: "YOOX",
  allegro: "allegro",
  "Pull&Bear": "Pull&Bear",
  asos: "asos",
};

const topCl = [
  "none",
  "tshirt",
  "sweater",
  "shirt",
  "sweatshirt",
  "singlet",
  "jacket",
];
const translateTopCl = {
  none: "Тип одягу",
  tshirt: "Футболки",
  sweater: "Светри",
  shirt: "Сорочки",
  sweatshirt: "Світшоти",
  singlet: "Майки",
  jacket: "Піджаки",
};

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(bodyParts[0]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedTopCl, setSelectedTopCl] = useState(topCl[0]);
  const [inputData, setInputData] = useState({});

  const handleTypeClick = (type) => {
    if (type !== selectedType) {
      setSelectedType(type);
      setInputData({});
    }
  };

  const handlePartChange = (part) => {
    if (selectedBodyPart !== part) {
      setSelectedBodyPart(part);
      setInputData({});
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrand !== brand) {
      setSelectedBrand(brand);
      setInputData({});
    }
  };

  const handleTopClChange = (topCl) => {
    if (selectedTopCl !== topCl) {
      setSelectedTopCl(topCl);
      setInputData({});
    }
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCarouselChange = (item) => {
    handleTypeClick(personTypes[item]);
  };

  const personTypeElements = (size) => {
    return personTypes.map((type) => (
      <Person
        key={type}
        type={type}
        part={selectedBodyPart}
        inputData={inputData}
        onClick={() => handleTypeClick(type)}
        onChange={handleInputChange}
        isSelected={selectedType === type}
        imgSize={size}
      />
    ));
  };

  return (
    <>
      <div className="bg-grey w-full rounded-lg py px-24 py-8 mt-20 mb-8 sm:px-5 relative">
        <h2 className="text-center sm:text-sm-h text-base-h">
          Калькулятор розмірів
        </h2>
        <div className="flex items-end flex-col gap-2 my-4 w-full right-5 absolute sm:flex-row sm:text-sm-p sm:justify-around">
          <select
            value={selectedBodyPart}
            onChange={(event) => handlePartChange(event.target.value)}
            className="select-base sm:!w-[100px]"
          >
            {bodyParts.map((part) => (
              <option key={part} value={part}>
                {translateBodyParts[part]}
              </option>
            ))}
          </select>
          <select
            value={selectedBrand}
            onChange={(event) => handleBrandChange(event.target.value)}
            className="select-base sm:!w-[100px]"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {translateBrands[brand]}
              </option>
            ))}
          </select>
          {selectedBodyPart == "top" && (
            <select
              value={selectedTopCl}
              onChange={(event) => handleTopClChange(event.target.value)}
              className="select-base sm:!w-[100px]"
            >
              {topCl.map((cl) => (
                <option key={cl} value={cl}>
                  {translateTopCl[cl]}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex justify-between gap-16 items-end mt-[120px] sm:hidden md:hidden">
          {personTypeElements("100%")}
        </div>
        <div className="flex justify-between gap-16 items-end mt-[120px] sm:hidden lg:hidden">
          {personTypeElements("130px")}
        </div>

        <div className="mt-[60px] md:hidden xl:hidden">
          <Slider onChange={handleCarouselChange}>
            {personTypeElements("130px")}
          </Slider>
        </div>
      </div>
      <Button
        onClick={() =>
          console.log({
            type: selectedType,
            bodyPart: selectedBodyPart,
            data: inputData,
            brand: selectedBrand,
            clothes: selectedTopCl,
          })
        }
      >
        Розрахувати
      </Button>
    </>
  );
}
