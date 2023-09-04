import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchObjectives = createAsyncThunk("objectives/objectives", async (id) => {
 const response = await axios.get(`${config.API_ENDPOINT}/objectives/byProjectId/${id}`);
  console.log("objectives from storeeeeeeee",response.data);
  return response.data;
});



  
  export const fetchObjective = createAsyncThunk("objectives/objective", async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/objectives/${id}`);
    return response.data;
  });
  
  export const createObjective = createAsyncThunk(
    "objectives/createObjective",
    async (body, { dispatch }) => {
      console.log("aaaaa");
      const response = await axios.post(`${config.API_ENDPOINT}/objectives`, body);
      dispatch(fetchObjective(response.data));
      console.log("create objectives", response.data);
      return response.data;
    }
  );
  
  export const updateObjective = createAsyncThunk(
    "objectives/updateObjective",
    async ({ objectiveId, ...body }, { dispatch }) => {
      const response = await axios.patch(
        `${config.API_ENDPOINT}/objectives/${objectiveId}`,
        body
      );
      dispatch(fetchObjective(response.data.id));
      console.log("update stage from store",response.data)
      return response.data;
    }
  );
  
  export const removeObjective = createAsyncThunk(
    "objectives/deleteObjective",
    async (id, { dispatch }) => {
      const response = await axios.delete(`${config.API_ENDPOINT}/objectives/${id}`);
      dispatch(fetchObjectives());
      return response.data;
    });

  export const objectiveSlice= createSlice({
    name: "objective",
    initialState: {
      objective:null,
      objectives: {
        items: [],
       
      },
     
      error: null,
      deleteError: null,
      saveError: null,
      createObjectiveError: null,
    },

    reducers: {},

    extraReducers(builder) {
    
      builder.addCase(fetchObjectives.fulfilled, (state, action) => {
        state.objectives.items=action.payload;
        console.log("one ",state.objectives.items)
      });
    },
  });
  export default objectiveSlice.reducer;