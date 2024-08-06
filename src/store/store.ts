import { configureStore } from '@reduxjs/toolkit';
import httpResponseReducer from './httpResponse';
import layoutReducer from './layoutSlice';

const store = configureStore({
  reducer: {
    httpResponse: httpResponseReducer,
    layout: layoutReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
