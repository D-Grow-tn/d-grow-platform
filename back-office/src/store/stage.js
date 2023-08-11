import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchStages = createAsyncThunk("stages/stages", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/stages/byObjectiveId/${id}`);
  console.log("stages from store",response.data);
  return response.data;
});



  
  export const fetchStage = createAsyncThunk("stages/stage", async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/stages/${id}`);
    return response.data;
  });
  
  export const createStage = createAsyncThunk(
    "stages/createStage",
    async ({id,body}, { dispatch }) => {
      console.log("aaaaa",body);
      const response = await axios.post(`${config.API_ENDPOINT}/stages/${id}`, body);
      // dispatch(fetchStages(response.data));
      console.log("from storestagecreate", response.data);
      return response.data;
    }
  );
  
  export const updateStage = createAsyncThunk(
    "stages/updateStage",
    async ({id,body} ) => {
      const response = await axios.patch(
        `${config.API_ENDPOINT}/stages/${id}`, body);
      // dispatch(fetchStages());
      console.log("update stage from store",response)
      return response.data;
    }
  );
  
  export const removeStage = createAsyncThunk(
    "stages/deleteStage",
    async (id, { dispatch }) => {
      const response = await axios.delete(`${config.API_ENDPOINT}/stages/${id}`);
      // dispatch(fetchStages(response.data));
      return response.data;
    });

  export const stageSlice= createSlice({
    name: "stage",
    initialState: {
      stage:null,
      stages: {
        items: [],
       
      },
     
      error: null,
      deleteError: null,
      saveError: null,
      createStageError: null,
    },

    reducers: {},

    extraReducers(builder) {
    
      builder.addCase(fetchStages.fulfilled, (state, action) => {
        state.stages.items=action.payload;
        console.log("one store",state.stages.items)
      });
      builder.addCase(removeStage.fulfilled, (state, action) => {
        // Find the index of the removed project in the items array
        const removedIndex = state.stages.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        // If the project was found, remove it from the items array
        if (removedIndex !== -1) {
          state.stages.items.splice(removedIndex, 1);
        }
      });
    },
    
  });
  export default stageSlice.reducer;