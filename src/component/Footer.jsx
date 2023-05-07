import React from "react";
import {
  GAME_STATE_PLAYING,
  // GAME_STATE_DRAW,
  // GAME_STATE_WIN,
} from "../constants";

const Footer = ({ onNewGameClick, onSuggestGameClick, gameState }) => {
  const renderButton = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return (
        <>
          <button onClick={onSuggestGameClick}>Suggest</button>
          <button onClick={onNewGameClick}>New Game</button>
        </>
      );
    } else {
      return <button onClick={onNewGameClick}>New Game</button>;
    }
  };

  return <div className="panel footer">{renderButton()}</div>;
};

// const Footer = ({ onNewGameClick, onSuggestGameClick, gameState }) => {
//   const renderButton = () => {
//     if (gameState === GAME_STATE_PLAYING) {
//       return <button onClick={onSuggestGameClick}>Suggest</button>;
//     } else if (gameState === GAME_STATE_WIN || gameState === GAME_STATE_DRAW) {
//       return <button onClick={onNewGameClick}>New Game</button>;
//     }
//   };

//   return <div className="panel footer">{renderButton()}</div>;
// };

export default Footer;
