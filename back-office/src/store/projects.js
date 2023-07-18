import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchProjects = createAsyncThunk("projects/projects", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/projects`);
  console.log("====================================");
  console.log(response.data, "wayou");
  console.log("====================================");
  return response.data;
});

export const fetchProject = createAsyncThunk(
  "projects/oneProject",
  async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/projects/${id}`);
    console.log("res", response.data);
    return response.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (body, { dispatch }) => {
    console.log(body, "body");
    const response = await axios.post(`${config.API_ENDPOINT}/projects`, body);
    dispatch(fetchProject(response.data));
    return response.data;
  }
);

export const fetchProjectByPM = createAsyncThunk(
  "projects/project",
  async (id) => {
    const response = await axios.get(
      `${config.API_ENDPOINT}/projects/by_projectManager/${id}`
    );
    console.log(response,"response")
    return response.data;
  }
);

export const removeProject = createAsyncThunk(
    "projects/deleteProject",
    async (id, { dispatch }) => {
      console.log(id)
      const response = await axios.delete(
        `${config.API_ENDPOINT}/projects/${id}`
      );
      dispatch(fetchProjects());
      return response.data;
    }
  );
  export const updateProject = createAsyncThunk(
    "projects/updateProject",
    async (body) => {
      const {projectId,...rest} = body
      console.log(rest,'rest')
      const response = await axios.patch(
        `${config.API_ENDPOINT}/projects/${projectId}`,
        {...rest}
      );
      
      return response.data;
    }
  );

 

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: null,
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
    builder.addCase(removeProject.fulfilled, (state, action) => {
      // Find the index of the removed project in the items array
      const removedIndex = state.projects.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the project was found, remove it from the items array
      if (removedIndex !== -1) {
        state.projects.items.splice(removedIndex, 1);
      }
    });
  },
});
export default projectSlice.reducer;
