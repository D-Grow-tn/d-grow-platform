import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";
console.log(config);

export const fetchClients= createAsyncThunk("clients/clients", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/clients`);
    console.log("from the store",response.data);
    return response.data;
  });

  export const fetchClient = createAsyncThunk("clients/client", async (id) => {
    const response = await axios.get(`http://localhost:3001/api/v1/clients/${id}`);
    return response.data;
  });

// export const fetchProject = createAsyncThunk("projects/oneProject", async (id) => {
//   const response = await axios.get(`${config.API_ENDPOINT}/projects/${id}`);
//   console.log("res",response.data);
//   return response.data;
// });
// export const fetchProjectbyClient = createAsyncThunk("projects/project", async (id) => {
//   const response = await axios.get(`${config.API_ENDPOINT}/projects/by_client/${id}`);
//   console.log("proj",response.data);
//   return response.data;
  
//   });


  export const clientSlice= createSlice({
    name: "client",
    initialState: {
      client:null,
      clients: {
        items: [],
       
      },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },
 
    reducers: {},

    extraReducers(builder) {
     
      builder.addCase(fetchClients.fulfilled, (state, action) => {
        state.clients.items = action.payload;
      
      });

      builder.addCase(fetchClient.fulfilled, (state, action) => {
        state.client = action.payload;
      });
    },
  });
  export default clientSlice.reducer;
