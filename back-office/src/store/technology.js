import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchTechnologies = createAsyncThunk("technologies/technologies", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/technologies`);
  return response.data;
});

export const fetchTechnology = createAsyncThunk(
  "technologies/oneTechnology",
  async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/technologies/${id}`);
    console.log("res", response.data);
    return response.data;
  }
);

 

export const technologySlice = createSlice({
  name: "technology",
  initialState: {
    technology: null,
    technologies: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchTechnologies.fulfilled, (state, action) => {
      state.technologies.items = action.payload;
    });
    builder.addCase(fetchTechnology.fulfilled, (state, action) => {
      state.technology = action.payload;
    });
  },
});
export default technologySlice.reducer;
