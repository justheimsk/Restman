import { configureStore } from '@reduxjs/toolkit';
import httpResponseReducer from './httpResponse';

export default configureStore({
  reducer: {
    httpResponse: httpResponseReducer,
  },
});
