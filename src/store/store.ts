import { configureStore } from '@reduxjs/toolkit';
import httpResponseReducer from './httpResponse';

const store = configureStore({
  reducer: {
    httpResponse: httpResponseReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
