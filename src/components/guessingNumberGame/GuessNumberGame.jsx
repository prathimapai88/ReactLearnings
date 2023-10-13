import React, { useEffect, useState } from "react";
import "./GuessNumber.css";
import getClass from './functions';
import useGuess from "./customHooks/useGuess";



function GuessNumberGame() {
  let {reset,
    promptMsg,
    userInput,
    updateUserVal,
    generateNumber,
    guessStatus,
    handleSubmit }=useGuess();

  return (
    <div className="guess-game-container">
      <h3>Click below Button to generate number between 1 to 10</h3>
      <button onClick={generateNumber} type="button" className="btn btn-primary">
        Generate Random Number
      </button>
      <button onClick={reset} type="button" className="btn btn-secondary reset-btn">Reset</button>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="guessNumber" className="form-label">
            Enter your Guess
          </label>
          <input
            type="number"
            className="form-control"
            id="guessNumber"
            placeholder="Guess"
            value={userInput}
            onChange={updateUserVal}
          />
        </div>
        <button type="submit" className="btn btn-warning">
         Check guess
      </button>
       {promptMsg && <div className={`p-3 ${guessStatus}`}>{promptMsg}</div>}
      </form>
    </div>
  );
}

export default GuessNumberGame;
