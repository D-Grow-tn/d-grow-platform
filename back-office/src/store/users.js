import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";
console.log(config);




export const fetchUsers = createAsyncThunk("users/users", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/users`);
  console.log("from the store", response.data);
  return response.data;
});

export const fetchUser = createAsyncThunk("users/user", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/users/${id}`);
  return response.data;
});

export const createUser = createAsyncThunk(
  "user/create",
  async (body,{dispatch}) => {
    const response = await axios.post(
      `${config.API_ENDPOINT}/users`,
      body
    );
    dispatch(fetchUsers())
    console.log("create dataaaaaaaaaa",response.data);
    return response.data
  }
);
export const updateUser = createAsyncThunk("users/Update", async (form) => {
  const { userId, ...rest } = form;
  await axios.patch(`${config.API_ENDPOINT}/users/${userId}`, {
    ...rest,
  });

  const updatedUserResponse = await axios.get(
    `${config.API_ENDPOINT}/users/${userId}`
  );
  console.log("cccccc", updatedUserResponse.data);
  return updatedUserResponse.data;
});

export const removeUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("tokenAdmin"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.delete(
      `${config.API_ENDPOINT}/users/${id}`,
      configs
    );
    dispatch(fetchUsers());
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.items = action.payload;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export default userSlice.reducer;
