import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchSignup from './signupAPI';

const initialState = {
  status: 'idle',
  response: '',
};

export const signupAsync = createAsyncThunk(
  'signup/fetchSignup',
  async (user) => {
    const response = await fetchSignup(user);
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setResponse: (state) => ({ ...state, response: state.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.response = action.payload;
      });
  },
});

export const { setResponse } = signupSlice.actions;

export default signupSlice.reducer;
