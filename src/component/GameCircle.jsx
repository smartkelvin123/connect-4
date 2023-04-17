import React from "react";
import "../styles/Game.css";

const GameCircle = ({ id, children, className, oncircleClick }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => oncircleClick(id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
