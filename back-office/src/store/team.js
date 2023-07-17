import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchTeams = createAsyncThunk("teams/teams", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/teams`);
  return response.data;
});

export const fetchTeam = createAsyncThunk(
  "teams/oneteam",
  async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/teams/${id}`);
    console.log("res", response.data);
    return response.data;
  }
);
export const createTeam = createAsyncThunk(
  "teams/createTeam",
  async (body, { dispatch }) => {
    console.log(body, "body");
    const response = await axios.post(`${config.API_ENDPOINT}/teams`, body);
    dispatch(fetchTechnology(response.data));
    return response.data;
  }
);
export const removeTeam = createAsyncThunk(
  "teams/deleteTeam",
  async (id, { dispatch }) => {
    console.log(id)
    const response = await axios.delete(
      `${config.API_ENDPOINT}/teams/${id}`
    );
    dispatch(fetchTeams());
    return response.data;
  }
);
export const updateTeam = createAsyncThunk(
  "teams/updateTeam",
  async (body) => {
    const {technologyId,...rest} = body
    console.log(rest,'rest')
    const response = await axios.patch(
      `${config.API_ENDPOINT}/teams/${technologyId}`,
      {...rest}
    );
    
    return response.data;
  }
);
 

export const teamySlice = createSlice({
  name: "technology",
  initialState: {
    team: null,
    teams: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.teams.items = action.payload;
    });
    builder.addCase(fetchTeam.fulfilled, (state, action) => {
      state.team = action.payload;
    });
  },
});
export default teamySlice.reducer;
