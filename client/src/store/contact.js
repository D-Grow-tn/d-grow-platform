import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchContact = createAsyncThunk("contact/fetchContact",async ()=> {
    const response = await axios.get(`${config.API_ENDPOINT}/contact`);
    return response.data;
})
export const createContact = createAsyncThunk(
  "contact/createContact",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config.API_ENDPOINT}/contact`, body );
      return response.data;
    } catch (error) {
     
      dispatch(fetchContact());
      throw error; 
    }
  }
);

export const eventSlice = createSlice({
    name:"contact",
    initialState: {
        contacts:{
            items: [],
        },
        error : null,
        createProjectError: null ,
    },

    reducers : {},
    extraReducers(builder) {

        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.items = action.payload;
           });
    },
    
});

export default eventSlice.reducer;

