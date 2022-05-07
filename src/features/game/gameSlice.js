import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: 20,
  status: 'idle',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: (state, action) => {
      state.coins = action.payload;
    },
    increment: (state, action) => {
      state.coins += action.payload;
    },
    decrement: (state) => {
      state.coins -= 1;
    },
  },
});

export const { increment, decrement, reset } = gameSlice.actions;

export default gameSlice.reducer;
