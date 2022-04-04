import { createSlice } from "@reduxjs/toolkit";
import { TileObject } from "../data/tiles";

export type UserState = {
  currentGameId: string | null,
  displayName: string | null,
  email: string | null,
  isBagOpen: boolean,
  isZoomedIn: boolean,
  tiles: TileObject[],
  uid: string | null,
};

const initialState: UserState = {
  currentGameId: null,
  displayName: null,
  email: null,
  isBagOpen: true,
  isZoomedIn: true,
  tiles: [],
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser() {
      return initialState;
    },
    setUser(state, { payload }) {
      state.currentGameId = payload.currentGameId;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.tiles = payload.tiles;
      state.uid = payload.uid;
    },
    toggleBag(state) {
      state.isBagOpen = !state.isBagOpen;
    },
    toggleZoom(state) {
      state.isZoomedIn = !state.isZoomedIn;
    },
    updateTiles(state, { payload }) {
      state.tiles = payload;
    },
  },
});

export const {
  resetUser,
  setUser,
  toggleBag,
  toggleZoom,
  updateTiles,
} = userSlice.actions;

export const userReducer = userSlice.reducer;