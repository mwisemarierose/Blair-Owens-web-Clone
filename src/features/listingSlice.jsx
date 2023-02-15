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
  const token = localStorage.getItem("token")
  console.log(token)
  axios({
    method: "POST",
    url: "https://klabapi.onrender.com/api/posts/create",
    data: data,
    headers: {
      Authorization: `bearer ${token}`
    },
  }).then((res) => {
    dispatch(list());
    console.log('helloo')
  }).catch((err) => {
    console.log(err)
  });
};

export const { list } = listSlice.actions;
export default listSlice.reducer;
