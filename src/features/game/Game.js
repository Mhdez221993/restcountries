import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './gameSlice';
import playGame from './playGame';

function Game() {
  const dispatch = useDispatch();
  const { coins } = useSelector(({ game }) => game);

  useEffect(() => {
    if (coins === 0) dispatch(reset(20));
  }, [coins]);

  const handleGame = () => {
    dispatch(decrement());
    const result = playGame();
    if (result) {
      dispatch(increment(result));
    }
  };

  return (
    <div>
      <h1>Game</h1>
      <h2>{coins}</h2>
      <button
        type="button"
        onClick={handleGame}
      >
        Play
      </button>
    </div>
  );
}

export default Game;
