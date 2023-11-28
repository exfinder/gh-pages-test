import React, { useState } from "react";
import instructions from "./instructions";

const InteractiveMenu = () => {
  const [activeCategory, setActiveCategory] = useState("info");

  const getButtonClassName = (category) => {
    let className =
      "btn text-left w-full text-grey font-semibold py-5 px-12 rounded-[20px] ";

    if (activeCategory === category) {
      className += "active";
    }
    return className;
  };

  return (
    <div className="w-full flex justify-between py-10">
      <div className="menu-buttons w-4/12 text-left">
        <button
          class={getButtonClassName("info")}
          onClick={() => setActiveCategory("info")}
        >
          Як правильно зняти мірки
        </button>
        <button
          class={getButtonClassName("women")}
          onClick={() => setActiveCategory("women")}
        >
          Для жінок
        </button>
        <button
          class={getButtonClassName("men")}
          onClick={() => setActiveCategory("men")}
        >
          Для чоловіків
        </button>
        <button
          class={getButtonClassName("kids")}
          onClick={() => setActiveCategory("kids")}
        >
          Для дітей
        </button>
      </div>
      <div className="instructions w-6/12 pt-6">{instructions[activeCategory]}</div>
    </div>
  );
};

export default InteractiveMenu;
