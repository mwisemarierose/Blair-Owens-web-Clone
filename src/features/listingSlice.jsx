import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  EstateCreated: false,
  data: [],
};

export const listSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    list: (state) => {
      state.EstateCreated = true;
    },
    getList: (state, action) => {
      console.log(action);
      state.data = [action.payload];
    },
  },
});

export const createList = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(token);
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
      console.log("helloo");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLists = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const res = await axios.get("https://klabapi.onrender.com/api/estate");

    dispatch(getList(res));
  } catch (err) {
    console.log(err);
  }
};

export const { list, getList } = listSlice.actions;
export default listSlice.reducer;
