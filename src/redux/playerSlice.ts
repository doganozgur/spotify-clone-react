import { AudioControls, TrackTypes } from "./../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type StateTypes = {
  isPlaying: boolean;
  current: null | TrackTypes;
  controls: null | AudioControls;
};

const initialState: StateTypes = {
  isPlaying: false,
  current: null,
  controls: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<TrackTypes>) => {
      const { payload } = action;

      state.current = payload;
      state.isPlaying = !state.isPlaying;
    },
    setControls: (state, action) => {
      const { payload } = action;

      state.controls = payload;
    },
  },
});

export const { setCurrent, setControls } = playerSlice.actions;
export default playerSlice.reducer;
