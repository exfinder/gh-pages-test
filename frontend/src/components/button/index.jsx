import React from "react";

export function Button({ onClick, children, color }) {
  return (
    <button className="btn-default" onClick={onClick} style={{ backgroundColor: color, boxShadow: `0 0 1px 5px ${color}` }}>
      {children}
    </button>
  );
}
