import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "../reduser/UseReducer";

export const store = configureStore({
  reducer: UseReducer,
});
