import { configureStore } from '@reduxjs/toolkit';
import signin from '../features/sigin/siginSlice';
import signup from '../features/sigup/signupSlice';

const store = configureStore({
  reducer: {
    signup,
    signin,
  },
});

export default store;
