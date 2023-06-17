import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchClient = createAsyncThunk("clients/client", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/clients/${id}`);
  return response.data;
});
export const UpdateClient = createAsyncThunk("clients/Update", async (form) => {
  const { clientId, name, address, phone } = form;
  const response = await axios.patch(
    `${config.API_ENDPOINT}/clients/${clientId}`,
    { name: name, address: address, phone: phone }
  );
  return response.data;
});

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    client: null,
    clients: {
      items: [],
      count: 0,
    },
    error: null,
    deleteError: null,
    saveError: null,
    createCategoryError: null,
  },
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
    //   state.bookmarks.items = action.payload;
    // });
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
    builder.addCase(UpdateClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
  },
});
export default clientSlice.reducer;
