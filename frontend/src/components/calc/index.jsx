import React, { useState } from "react";
import { Button } from "../button";
import { Person } from "./person";

const personTypes = ["men", "women", "child"];
const bodyParts = ["head", "top", "lower"];

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(bodyParts[0]);
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

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const personTypeElements = personTypes.map((type) => (
    <Person
      key={type}
      type={type}
      part={selectedBodyPart}
      inputData={inputData}
      onClick={() => handleTypeClick(type)}
      onChange={handleInputChange}
      isSelected={selectedType === type}
    />
  ));

  const translateSelect = {
    head: "Головний убір",
    top: "Верхня частина тіла",
    lower: "Нижня частина тіла",
  };

  return (
    <>
      <div className="bg-grey w-full rounded-lg py px-24 py-8 mt-20 mb-8 sm:px-5">
        <h2 className="text-center sm:text-sm-h text-base-h">
          Калькулятор розмірів
        </h2>
        <div className="w-full flex justify-end my-4">
          <select
            value={selectedBodyPart}
            onChange={(event) => handlePartChange(event.target.value)}
            className="select-base"
          >
            {bodyParts.map((part) => (
              <option key={part} value={part}>
                {translateSelect[part]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between gap-16">{personTypeElements}</div>
      </div>
      <Button
        onClick={() =>
          console.log({
            type: selectedType,
            bodyPart: selectedBodyPart,
            data: inputData,
          })
        }
      >
        Розрахувати
      </Button>
    </>
  );
}
