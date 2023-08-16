import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";



export const fetchMedias = createAsyncThunk("medias/medias", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/medias`);
     console.log("from the store", response);
    return response.data;
  });
  export const createMedia = createAsyncThunk(
    "medias/create",
     async (formData,{dispatch}) => {
        try {
    const response = await axios.post(`${config.API_ENDPOINT}/medias`, formData);
    return response.data;
} catch (error)  {
    dispatch(fetchMedias());
    throw error;
}

  });
  



  export const mediaSlice = createSlice({
    name:"media",
    initialState:{
        medias: {
            items:[],
        },
        error: null,
        deleteError: null,
        saveError: null,
        createProjectError: null,
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchMedias.fulfilled,(state,action) => {
            state.medias = action.payload;
        })
    }
  })

  export default mediaSlice.reducer;