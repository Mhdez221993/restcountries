import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries, fetchCountries } from './countriesAPI';

const initialState = {
  status: 'idle',
  countries: [],
};

export const countriesAsync = createAsyncThunk(
  'countries/fetchCountries',
  async (name) => {
    const response = await fetchCountries(name);
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const allCountriesAsync = createAsyncThunk(
  'countries/fetchAllCountries',
  async () => {
    const response = await fetchAllCountries();
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const signupSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state) => ({ ...state, countries: state.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(countriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(countriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.countries = action.payload;
      })
      .addCase(allCountriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.countries = action.payload;
      });
  },
});

export const { setCountries } = signupSlice.actions;

export default signupSlice.reducer;
