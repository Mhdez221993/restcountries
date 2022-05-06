import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/countries/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
