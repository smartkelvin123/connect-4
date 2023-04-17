import React from "react";
import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
} from "../constants";

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>PLAYER {currentPlayer} Turn</div>;
      case GAME_STATE_WIN:
        return <div>WINNER {winPlayer} Wins</div>;
      case GAME_STATE_DRAW:
        return <div>GAME IS A DRAW</div>;
      default:
    }
  };

  return (
    <div className="panel header">
      <div className="header-text"> {renderLabel()}</div>
    </div>
  );
};

export default Header;
