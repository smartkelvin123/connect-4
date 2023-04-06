import React, { useState } from "react";

import GameCircle from "./GameCircle";
import "../styles/Game.css";
import Header from "./Header";
import Footer from "./Footer";

const NO_CIRCLES = 16;
const No_player = 0;
const player_1 = 1;
const player_2 = 2;

const Gameboard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_player));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const circleClicked = (id) => {
    console.log("circle clicked :" + id);

    setGameBoard((prev) => {
      return prev.map((item, index) => {
        if (index === id) {
          return currentPlayer;
        }
        return item;
      });
    });

    setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        oncircleClick={circleClicked}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="gameBoard">
        {initBoard()}
        <Footer />
      </div>
    </>
  );
};
export default Gameboard;
