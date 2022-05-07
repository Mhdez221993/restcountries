import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchSignin from './siginAPI';

const initialState = {
  status: 'idle',
  response: '',
};

export const signinAsync = createAsyncThunk(
  'signin/fetchSignin',
  async (user) => {
    const response = await fetchSignin(user);
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    setResponse: (state) => ({ ...state, response: state.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(signinAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signinAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.response = action.payload;
      });
  },
});

export const { setResponse } = signinSlice.actions;

export default signinSlice.reducer;
