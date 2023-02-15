import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authenticationSlice";
import listReducer from "./features/listingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    list: listReducer,
  },
});
