import type { METHODS } from '@components/Layout';
import { createSlice } from '@reduxjs/toolkit';

export type ILayoutState = {
  endpoints: Array<{
    id: string;
    name: string;
    url: string;
    method: METHODS;
    active: boolean;
  }>;
  tabs: Array<{
    endpointId: string;
    id: string;
  }>;
};

const initialState: ILayoutState = {
  endpoints: [],
  tabs: [],
};

export const layoutSlice = createSlice({
  name: 'layoutSlice',
  initialState,
  reducers: {
    pushEndpoint: (state, action) => {
      state.endpoints.push(action.payload);
      state.tabs.push({
        id: `${Math.floor(Math.random() * 999)}`,
        endpointId: action.payload.id,
      });
    },
    activateEndpoint: (state, action) => {
      const endpoint = state.endpoints.find((e) => e.id === action.payload);
      if (endpoint) {
        const endpoints = state.endpoints.filter((e) => e.active);
        if (endpoints.length) {
          for (const endp of endpoints) {
            endp.active = false;
          }
        }

        endpoint.active = true;
      }
    },
    setUrl: (state, action) => {
      const endpoint = state.endpoints.find((e) => e.id === action.payload.id);
      if (endpoint) {
        endpoint.url = action.payload.url;
      }
    },
  },
});

export const { pushEndpoint, activateEndpoint, setUrl } = layoutSlice.actions;
export default layoutSlice.reducer;
