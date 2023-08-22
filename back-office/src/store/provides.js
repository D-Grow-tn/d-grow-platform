import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchProvides = createAsyncThunk("provides/provides", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/provides`);
  // console.log(response.data,"from the store");
  return response.data;
});

export const fetchProvide = createAsyncThunk("provides/provide", async (id) => {
  console.log(id);
  const response = await axios.get(`${config.API_ENDPOINT}/provides/${id}`);
  return response.data;
});

export const removeProvide = createAsyncThunk(
  "provides/deleteProvide",
  async (id, { dispatch }) => {
    // console.log(id);
    const response = await axios.delete(
      `${config.API_ENDPOINT}/provides/${id}`
    );
    dispatch(fetchProvides());
    return response.data;
  }
);

export const createProvide = createAsyncThunk(
  "provides/createProvide",
  async (body, { dispatch }) => {
    // console.log("aaaaa");
    const response = await axios.post(`${config.API_ENDPOINT}/provides`, body);
    dispatch(fetchProvide(response.data));
    // console.log("provide from store", response.data);
    return response.data;
  }
);

export const updateProvide = createAsyncThunk(
  "provides/updateProvide",
  async (body) => {
    const { providerId, ...rest } = body;
    // console.log(rest, "rest");
    const response = await axios.patch(
      `${config.API_ENDPOINT}/provides/${providerId}`,
      { ...rest }
    );

    return response.data;
  }
);

export const provideSlice = createSlice({
  name: "provide",
  initialState: {
    provide: null,
    provides: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchProvides.fulfilled, (state, action) => {
      state.provides.items = action.payload;
      // console.log("provides from aymen ", state.provides.items);
    });

    builder.addCase(fetchProvide.fulfilled, (state, action) => {
      state.provide = action.payload;
    });

    builder.addCase(updateProvide.fulfilled, (state, action) => {
      state.provide = action.payload;
    });
  },
});

export default provideSlice.reducer;
