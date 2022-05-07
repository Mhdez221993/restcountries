import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countries from '../features/countries/countriesSlice';
import game from '../features/game/gameSlice';
import signin from '../features/sigin/siginSlice';
import signup from '../features/sigup/signupSlice';

const store = configureStore({
  reducer: {
    signup,
    signin,
    countries,
    game,
  },
  middleware: [thunk, logger],
});

export default store;
