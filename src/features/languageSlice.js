import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    en: false,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    handleEnChange: (state) => {
      state.en = !state.en;
    },
    reset: () => initialState,
  },
});

export const {
  handleEnChange,
  reset,

} = languageSlice.actions;

export default languageSlice.reducer;
