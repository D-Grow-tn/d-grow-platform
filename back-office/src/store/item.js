import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchItems = createAsyncThunk("items/items", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/item`);
  console.log("from the store", response.data);
  return response.data;
});

export const fetchItem = createAsyncThunk("items/Item", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/item/${id}`);
  return response.data;
});

export const createItem = createAsyncThunk(
  "items/createItem",
  async (body) => {
    const response = await axios.post(`${config.API_ENDPOINT}/item`, body);
    return response.data;
  }
);

export const updateItem = createAsyncThunk(
  "items/updateItem",
  async ({ id, ...body }, { dispatch }) => {
    console.log(body, "body");
    const response = await axios.patch(
      `${config.API_ENDPOINT}/item/${id}`,
      body
    );
    dispatch(fetchItem(response.data.id));
    return response.data;
  }
);

export const removeItem = createAsyncThunk(
  "items/deleteItem",
  async (id, { dispatch }) => {
    const response = await axios.delete(`${config.API_ENDPOINT}/Item/${id}`);
    dispatch(fetchItems());
    return response.data;
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: null,
    items: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items.items = action.payload;
    });

    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export default itemSlice.reducer;
