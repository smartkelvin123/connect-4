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

// import React from "react";
// import "../styles/Game.css";

// const GameCircle = ({ id, children, oncircleClick }) => {
//   return (
//     <div
//       className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`}
//       onClick={() => oncircleClick(id)}
//     >
//       {children}
//     </div>
//   );
// };

// export default GameCircle;
