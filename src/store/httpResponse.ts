import { createSlice } from '@reduxjs/toolkit';

export const httpResponseSlice = createSlice({
  name: 'httpResponse',
  initialState: {
    value: {},
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = httpResponseSlice.actions;
export default httpResponseSlice.reducer;
