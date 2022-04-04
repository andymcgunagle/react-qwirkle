import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoadingSpinner: true,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    resetView() {
      return initialState;
    },
    setShowLoadingSpinner(state) {
      state.showLoadingSpinner = !state.showLoadingSpinner;
    },
  },
});

export const {
  setShowLoadingSpinner,
  resetView,
} = viewSlice.actions;

export const viewReducer = viewSlice.reducer;