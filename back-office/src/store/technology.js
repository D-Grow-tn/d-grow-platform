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
export const createTechnology = createAsyncThunk(
  "technologies/createTechnology",
  async (body, { dispatch }) => {
    console.log(body, "body");
    const response = await axios.post(`${config.API_ENDPOINT}/technologies`, body);
    dispatch(fetchTechnology(response.data));
    return response.data;
  }
);
export const removeTechnology = createAsyncThunk(
  "technologies/deleteTechnology",
  async (id, { dispatch }) => {
    console.log(id)
    const response = await axios.delete(
      `${config.API_ENDPOINT}/technologies/${id}`
    );
    dispatch(fetchTechnologies());
    return response.data;
  }
);
export const updateTechnology = createAsyncThunk(
  "technologies/updateTechnology",
  async (body) => {
    const {technologyId,...rest} = body
    console.log(rest,'rest')
    const response = await axios.patch(
      `${config.API_ENDPOINT}/technologies/${technologyId}`,
      {...rest}
    );
    
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
