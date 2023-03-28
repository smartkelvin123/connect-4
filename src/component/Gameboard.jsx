import React, { useState } from "react";

import GameCircle from "./GameCircle";
import "../styles/Game.css";

const No_player = 0;
const player_1 = 1;
const player_2 = 2;

const Gameboard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_player));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const circleClicked = (id) => {
    console.log("circle clicked :" + id);

    const board = [...gameBoard];
    board[id] = 1;
    setGameBoard(board);
    setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        id={id}
        className={`player_${gameBoard[id]}`}
        oncircleClick={circleClicked}
      />
    );
  };

  return (
    <div className="gameBoard">
      {renderCircle(0)}
      {renderCircle(1)}
      {renderCircle(2)}
      {renderCircle(3)}
      {renderCircle(4)}
      {renderCircle(5)}
      {renderCircle(6)}
      {renderCircle(7)}
      {renderCircle(8)}
    </div>
  );
};

export default Gameboard;

//   return (
//     <div className="gameBoard">
//       <GameCircle
//         id={1}
//         className="player_1"
//         onCircleClicked={circleClicked}
//       ></GameCircle>
//       <GameCircle
//         id={2}
//         className="player_2"
//         onCircleClicked={circleClicked}
//       ></GameCircle>
//       <GameCircle id={3} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={4} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={5} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={6} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={7} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={8} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={9} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={10} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={11} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={12} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={13} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={14} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={15} onCircleClicked={circleClicked}></GameCircle>
//       <GameCircle id={16} onCircleClicked={circleClicked}></GameCircle>
//     </div>
//   );
// };

// export default Gameboard;

// import React, { useState } from "react";
// import GameCircle from "./GameCircle";
// import "../styles/Game.css";

// const Gameboard = () => {
//   const [gameBoard, setGameBoard] = useState(Array(16).fill(0));

//   const circleClicked = (id) => {
//     const updatedGameBoard = [...gameBoard];
//     updatedGameBoard[id - 1] = 1;
//     setGameBoard(updatedGameBoard);
//   };

//   return (
//     <div className="gameBoard">
//       <GameCircle id={1} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={2} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={3} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={4} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={5} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={6} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={7} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={8} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={9} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={10} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={11} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={12} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={13} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={14} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={15} oncircleClick={circleClicked}></GameCircle>
//       <GameCircle id={16} oncircleClick={circleClicked}></GameCircle>
//     </div>
//   );
// };

// export default Gameboard;
