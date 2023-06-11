import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const me = createAsyncThunk("auth/meAdmin", async (token) => {
  let configs = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get("http://localhost:3001/api/v1/auth/me", {
    ...configs,
  });

  return response.data;
});
// ${config.API_ENDPOINT}
export const login = createAsyncThunk(
  "auth/loginAdmin",
  async (body, { dispatch }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/login",
      body
    );
    let aux = JSON.stringify(response.data);
    localStorage.setItem("token", aux);

    dispatch(me(response.data.Authorization));
    return response.data;
  }
);

export const resetPassword = createAsyncThunk(
  "auth/forgot-password",
  async (body, { dispatch }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/forgot-password",
      body
    );
    return response.data;
  }
);

export const verificationCode = createAsyncThunk(
  "auth/verification-code",
  async (body) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/verification-code",
      body
    );
    let aux = JSON.stringify(response.data);
    localStorage.setItem("tokenCode", aux);
    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (body) => {
    let token = JSON.parse(localStorage.getItem("tokenCode")).Authorization;
    let configs = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/change-password",
      body,
      configs
    );
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
