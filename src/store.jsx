import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authenticationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});