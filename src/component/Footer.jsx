import React from "react";

const Footer = ({ onNewGameClick, onSuggestGameClick }) => {
  return (
    <div className="panel footer">
      <button onClick={onNewGameClick}>New Game</button>
      <button onClick={onSuggestGameClick}>Suggest</button>
    </div>
  );
};

export default Footer;
