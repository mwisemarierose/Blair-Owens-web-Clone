import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  EstateCreated: false,
};

export const listSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    list: (state) => {
      state.EstateCreated = true;
    },
  },
});

export const createList = (data) => (dispatch) => {
  axios({
    method: "POST",
    url: "https://klabapi.onrender.com/api/posts/create",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((res) => {
    dispatch(list());
    console.log('helloo')
  });
};

export const { list } = listSlice.actions;
export default listSlice.reducer;
