import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchProjects = createAsyncThunk(
  "projects/projects",
  async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/projects`);
    console.log('====================================');
    console.log(response.data,'wayou');
    console.log('====================================');
    return response.data;
  }
);

export const fetchProject = createAsyncThunk("projects/oneProject", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects/${id}`);
  console.log("res",response.data);
  return response.data;
});

export const fetchProjectByPM = createAsyncThunk("projects/project", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects/by_projectManager/${id}`);
  return response.data;
  
  });
 
export const removeProject = createAsyncThunk(
    "decisions/deleteProject",
    async (id, { dispatch }) => {
      let token = JSON.parse(localStorage.getItem("tokenAdmin"));
      const configs = {
        headers: {
          Authorization: "Bearer " + token.Authorization,
        },
      };
      const response = await axios.delete(
        `${config.API_ENDPOINT}/projects/${id}`,
        configs
      );
      dispatch(fetchProjects());
      return response.data;
    }
  );

  export const projectSlice = createSlice({
    name: "project",
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

      builder.addCase(fetchProjectByPM.fulfilled, (state, action) => {
        state.projects.items = action.payload;
      });
    },
  });
  export default projectSlice.reducer;