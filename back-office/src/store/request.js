import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchRequests= createAsyncThunk("requests/requests", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/requests`);
    console.log("from the store",response.data);
    return response.data;
  });

  export const fetchRequest = createAsyncThunk("requests/request", async (id) => {
    const response = await axios.get(`http://localhost:3001/api/v1/requests/${id}`);
    return response.data;
  });

  export const fetchRequestsByEmployee = createAsyncThunk("requests/requestsByEmployee",async (id) => {
  const response = await axios.get(`http://localhost:3001/api/v1/requests/by_employee/${id}`)
    return response.data 
  }) 
  export const createRequest = createAsyncThunk("requests/createRequest", async (requestData) => {
    const response = await axios.post(`${config.API_ENDPOINT}/requests`, requestData);
    return response.data;
  });
  




  export const requestSlice= createSlice({
    name: "request",
    initialState: {
      request:null,
      requests: {
        items: [],
      },
 
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },
 
    reducers: {},

    extraReducers(builder) {
     
      // builder.addCase(fetchRequests.fulfilled, (state, action) => {
      //   state.requests.items = action.payload;
       
      
      // });

      // builder.addCase(fetchRequest.fulfilled, (state, action) => {
      //   state.request = action.payload;
      // });

      builder.addCase(fetchRequestsByEmployee.fulfilled,(state,action)=>{
        state.requests.items= action.payload;
        console.log('====================================');
        console.log(state.requests.items);
        console.log('====================================');
      })
     
      // builder.addCase(createRequest.fulfilled, (state, action) => {
      //  state.requests.items = action.payload;
      // });
      
    },
  });
  export default requestSlice.reducer;