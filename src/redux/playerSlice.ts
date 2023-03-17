import { AudioControls, TrackTypes } from "./../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type StateTypes = {
  playing: boolean;
  current: null | TrackTypes;
  controls: null | AudioControls;
  playerSidebar: boolean;
};

const initialState: StateTypes = {
  playing: false,
  current: null,
  controls: null,
  playerSidebar: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<TrackTypes>) => {
      state.current = action.payload;
      state.playing = !state.playing;
    },
    setControls: (state, action: PayloadAction<AudioControls>) => {
      state.controls = action.payload;
    },
    setPlayerSidebar: (state) => {
      state.playerSidebar = !state.playerSidebar;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const { setCurrent, setControls, setPlayerSidebar, setPlaying } =
  playerSlice.actions;
export default playerSlice.reducer;
