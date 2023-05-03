import React, { useState, useEffect } from "react";

import GameCircle from "./GameCircle";
import "../styles/Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner, getComputerMove } from "../helper";
import {
  GAME_STATE_PLAYING,
  No_player,
  player_1,
  player_2,
  NO_CIRCLES,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../constants";

const Gameboard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_player));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(No_player);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    console.log("initGame");

    setGameBoard(Array(16).fill(No_player));
    setCurrentPlayer(player_1);
    setGameState(GAME_STATE_PLAYING);
  };

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const suggestMoveClick = () => {
    circleClicked(getComputerMove(gameBoard));
  };

  const circleClicked = (id) => {
    console.log("circle clicked :" + id);

    if (gameBoard[id] !== No_player) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(No_player);
    }

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
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">
        {initBoard()}
        <Footer
          onNewGameClick={initGame}
          onSuggestGameClick={suggestMoveClick}
        />
      </div>
    </>
  );
};
export default Gameboard;
