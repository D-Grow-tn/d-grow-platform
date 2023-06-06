import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchProject = createAsyncThunk("projects/oneProject", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects/${id}`);
  console.log("res",response.data);
  return response.data;
});
export const fetchProjectbyClient = createAsyncThunk("projects/project", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects/by_client/${id}`);
  console.log( "hiiii" ,response.data);
  return response.data;
  
  });


  export const projectSlice= createSlice({
    name: "projects",
    initialState: {
      project:null,
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
      // builder.addCase(fetchProjects.fulfilled, (state, action) => {
      //   state.projects.items = action.payload;
      // });
      builder.addCase(fetchProject.fulfilled, (state, action) => {
        state.project = action.payload;
      });

      builder.addCase(fetchProjectbyClient.fulfilled, (state, action) => {
        state.projects.items = action.payload;
      });
    },
  });
  export default projectSlice.reducer;