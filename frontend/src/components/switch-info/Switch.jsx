import React, { useState } from "react";
import instructions from "./instructions";

const SwitchInfo = () => {
  const [activeCategory, setActiveCategory] = useState("info");

  const getButtonClassName = (category) => {
    let className =
      "btn-choose text-left w-full text-lightblack font-semibold py-5 px-12 rounded-[20px] sm:px-5 sm:py-3 sm:text-sm-p ";

    if (activeCategory === category) {
      className += "active";
    }
    return className;
  };

  return (
    <div className="w-full flex justify-between py-10 pl-6 gap-5">
      <div className="flex flex-col w-4/12 sm:w-6/12 text-left">
        <button
          className={getButtonClassName("info")}
          onClick={() => setActiveCategory("info")}
        >
          Як правильно зняти мірки
        </button>
        <button
          className={getButtonClassName("women")}
          onClick={() => setActiveCategory("women")}
        >
          Для жінок
        </button>
        <button
          className={getButtonClassName("men")}
          onClick={() => setActiveCategory("men")}
        >
          Для чоловіків
        </button>
        <button
          className={getButtonClassName("kids")}
          onClick={() => setActiveCategory("kids")}
        >
          Для дітей
        </button>
      </div>
      <div className="instructions w-6/12 pt-6 sm:text-sm-p text-base-p">
        {instructions[activeCategory]}
      </div>
    </div>
  );
};

export default SwitchInfo;
