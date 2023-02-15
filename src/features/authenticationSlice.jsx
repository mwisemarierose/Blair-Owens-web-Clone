import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userCreated:false,
  isLoggedIn: false,
  token: "",
  userData: {},
  error: "",
  loginSuccess: "User Logged successfully",

};

export const authSlice = createSlice({
  name: "a",
  initialState,
  reducers: {
    register:(state) =>{
      state.userCreated =true;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.error = action.payload;
    },
   
  },
});

export const loginUser = (data) => (dispatch) => {

  axios({
    method: "POST",
    url: "https://klabapi.onrender.com/api/auth/login",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      dispatch(token(res.data.token));
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.data));
      // localStorage.setItem("admin",)
    })
    .catch((err) => {
      dispatch(loginError(err.response.data.message));
    });
}
export const createUser = (data) =>(dispatch) => {

  axios ({
    method: "POST",
    url: "https://klabapi.onrender.com/api/auth/register",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((res) =>{
    dispatch(register())
  })
  
  
};

export const { login, token, loginError, loginSuccess, register } = authSlice.actions;
export default authSlice.reducer;

