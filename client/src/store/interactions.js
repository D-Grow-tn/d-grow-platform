import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchInteractions = createAsyncThunk("interactions/interactions", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/interactions/byProjectId/${id}`);
  console.log("resinter",response.data);
  return response.data;
});


export const createInteraction= createAsyncThunk("interactions/interaction", async (args,{dispatch}) => {
  const token = JSON.parse(localStorage.getItem("token")).Authorization;

    const configs = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  const { id, body } = args;

  const response = await axios.post(`${config.API_ENDPOINT}/interactions`,body,configs);
 dispatch(fetchInteractions(id)) 
 console.log("inter",response.data);
 return response.data;
  });

  export const interactionSlice= createSlice({
    name: "interactions",
    initialState: {
      interaction:null,
      interactions: {
        items: [],
       
      },
      error: null,
      deleteError: null,
      saveError: null,
      createInteractionError: null,
    },

    reducers: {},

    extraReducers(builder) {
    
      builder.addCase(fetchInteractions.fulfilled, (state, action) => {
        state.interactions.items = action.payload;
      });
    },
  });
  export default interactionSlice.reducer;