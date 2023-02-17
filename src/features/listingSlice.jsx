import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  EstateCreated: false,
  listings: [],
};

export const listSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    list: (state) => {
      state.EstateCreated = true;
    },
    getListings: (state, action) => {
      state.listings = action.payload;
    },
  },
});

export const createList = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios({
    method: "POST",
    url: "https://klabapi.onrender.com/api/estate/create",
    data: data,
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(list());
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const editList = (data) => (dispatch) => {
//   const token = localStorage.getItem("token");
//   axios({
//     method: "POST",
//     url: "https://klabapi.onrender.com/api/estate/update/{id}",
//     data: data,
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then((res) => {
//       dispatch(list());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getAllListings = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios({
    method: "GET",
    url: "https://klabapi.onrender.com/api/estate",
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((response) => {
    console.log(response);
    dispatch(getListings(response.data));
  });
};

export const { list, getListings } = listSlice.actions;
export default listSlice.reducer;
