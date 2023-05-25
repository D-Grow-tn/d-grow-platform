import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";




export const me = createAsyncThunk("auth/me", async (token) => {
  let configs = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  console.log(config);
  const response = await axios.get(`${config.API_ENDPOINT}/auth/me`, {
    ...configs,
  });

  return response.data;
});


export const login = createAsyncThunk(
  "auth/login",
  async (body, { dispatch }) => {
    const response = await axios.post(
      `${config.API_ENDPOINT}/auth/login`,
      body
    );
    let aux = JSON.stringify(response.data);
    localStorage.setItem("token", aux);

    dispatch(me(response.data.Authorization));
    return response.data;
  }
);


export const register = createAsyncThunk(
  "auth/register",
  async (body, { dispatch }) => {
    const response = await axios.post(`${config.API_ENDPOINT}/auth/register`,body);
    dispatch(login({ email: body.email, password: body.password }));
    return response.data;
  }
);



export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
    error: null,
    deleteError: null,
    saveError: null,
    registerError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
        state.error = action.error.message;
        });
  },
});
export default AuthSlice.reducer;
