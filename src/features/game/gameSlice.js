import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: 20,
  status: 'idle',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.coins = action.payload;
    },
    decrement: (state) => {
      state.coins -= 1;
    },
  },
});

export const { increment, decrement } = gameSlice.actions;

export default gameSlice.reducer;
