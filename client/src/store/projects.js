import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchProjects = createAsyncThunk("projects/projects", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects`);
  return response.data;
  });
export const fetchProjectbyClient = createAsyncThunk("projects/project", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects/by_client/${id}`);
  return response.data;
  });

// export const createCommand= createAsyncThunk("projects/createProjects", async (body,{dispatch}) => {
//   const response = await axios.post(`${config.API_ENDPOINT}/commands/TUN/`,body);
//  dispatch(fetchCommand(response.data.id)) 
//   });

  export const projectSlice= createSlice({
    name: "project",
    initialState: {
      project:[],
       projects: {
        items: [],
        
      },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },

    reducers: {},

    extraReducers(builder) {
      builder.addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects.items = action.payload;
      });

      builder.addCase(fetchProjectbyClient.fulfilled, (state, action) => {
        state.project = action.payload;
      });
    },
  });
  export default projectSlice.reducer;