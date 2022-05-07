import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './gameSlice';

function Game() {
  const dispatch = useDispatch();
  const { coins } = useSelector(({ game }) => game);

  useEffect(() => {
    if (coins === 0) dispatch(increment(20));
  }, [coins]);

  return (
    <div>
      <h1>Game</h1>
      <h2>{coins}</h2>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
      >
        Play
      </button>
    </div>
  );
}

export default Game;
