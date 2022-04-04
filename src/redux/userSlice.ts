import { createSlice } from "@reduxjs/toolkit";
import { TileObject } from "../utils/createBag";

export type UserState = {
  currentGameId: string | null,
  displayName: string | null,
  email: string | null,
  tiles: TileObject[],
  uid: string | null,
};

const initialState: UserState = {
  currentGameId: null,
  displayName: null,
  email: null,
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
    updateTiles(state, { payload }) {
      state.tiles = payload;
    },
  },
});

export const {
  resetUser,
  setUser,
  updateTiles,
} = userSlice.actions;

export const userReducer = userSlice.reducer;