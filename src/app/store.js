import { configureStore } from "@reduxjs/toolkit";
import langaugeReducer from "../features/languageSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    language: langaugeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

setupListeners(store.dispatch);
