import { createSlice } from '@reduxjs/toolkit';

export const httpResponseSlice = createSlice({
  name: 'httpResponse',
  initialState: {
    value: {
      data: {},
      elapsedTime: 0,
      size: 0,
      statusCode: 0,
      statusText: '',
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = httpResponseSlice.actions;
export default httpResponseSlice.reducer;
