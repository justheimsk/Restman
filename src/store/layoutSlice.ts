import type { IEndpoint } from '@lib/interfaces/Endpoint';
import type { ITab } from '@lib/interfaces/Tab';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ILayoutState = {
  endpoints: Array<IEndpoint>;
  tabs: Array<ITab>;
};

const initialState: ILayoutState = {
  endpoints: [],
  tabs: [],
};

export const layoutSlice = createSlice({
  name: 'layoutSlice',
  initialState,
  reducers: {
    pushEndpoint: (state, action: PayloadAction<Array<IEndpoint>>) => {
      for (const endp of action.payload) {
        state.endpoints.push(endp);
        state.tabs.push({
          id: `${Math.floor(Math.random() * 999)}`,
          endpointId: endp.id,
        });
      }
    },
    activateEndpoint: (state, action: PayloadAction<string>) => {
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
    setUrl: (state, action: PayloadAction<{ id: string; url: string }>) => {
      const endpoint = state.endpoints.find((e) => e.id === action.payload.id);
      if (endpoint) {
        endpoint.url = action.payload.url;
      }
    },
  },
});

export const { pushEndpoint, activateEndpoint, setUrl } = layoutSlice.actions;
export default layoutSlice.reducer;
