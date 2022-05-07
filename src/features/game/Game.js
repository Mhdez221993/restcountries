import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './game.css';
import { decrement, increment, reset } from './gameSlice';
import playGame from './playGame';

function Game() {
  const dispatch = useDispatch();
  const { coins } = useSelector(({ game }) => game);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (coins === 0) dispatch(reset(20));
  }, [coins]);

  const handleGame = () => {
    dispatch(decrement());
    const { puntuation, displaySlotes } = playGame();
    setState(displaySlotes);
    if (puntuation) {
      dispatch(increment(puntuation));
    }
  };

  return (
    <div className="game">
      <h1>WIN</h1>
      <div className="coins">{coins}</div>
      <div className="reel">
        {state.map((v, i) => {
          const key = `${v}${i}`;
          return (<span key={key}>{v}</span>);
        })}
      </div>
      <button
        type="button"
        onClick={handleGame}
        className="play"
      >
        Play
      </button>
    </div>
  );
}

export default Game;
