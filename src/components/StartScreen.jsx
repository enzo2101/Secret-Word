import React from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="StartScreen">
      <h1>Secret Word</h1>
      <h3>Clique no botão abaixo para começar a jogar</h3>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
