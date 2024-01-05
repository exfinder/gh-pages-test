import React from "react";
import inputPositions from "./inputPositions";

export function Person(props) {
  const { type, part, inputData, isSelected, onClick, onChange } = props;

  const typePositions = inputPositions[type];
  const partPositions = typePositions[part];
  const inputNames = partPositions ? Object.keys(partPositions) : [];


  return (
    <div>
      <button className="h-full flex items-end" onClick={onClick}>
        <div className="relative">
          <img
            src={`/src/images/${type}.png`}
            className={`object-contain ${
              isSelected ? "selected" : "not-selected"
            }`}
          />
          {isSelected && (
            <>
              <img
                src={`/src/images/${type}/desc_${part}.png`}
                className="absolute desc-abs appear-animation "
              />

              {inputNames.map((name) => (
                <input
                  key={name}
                  type="text"
                  className= "input-base appear-animation " 
                  name={name}
                  value={inputData[name]}
                  onClick={(event) => event.stopPropagation()}
                  onChange={(event) => onChange(name, event.target.value)}
                  style={{
                    top: partPositions[name].top,
                    left: partPositions[name].left,
                  }}
                  maxLength="4"
                  required
                />
              ))}
            </>
          )}
        </div>
      </button>
    </div>
  );
}
