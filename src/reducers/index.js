import { combineReducers } from '@reduxjs/toolkit';

import { WeatherReducer } from './WeatherReducer/WeatherReducer';

const reducer = combineReducers({
  WeatherReducer,
});

export default reducer;
