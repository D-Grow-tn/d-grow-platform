import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import config from "../configs";

export const fetchTests= createAsyncThunk("tests/tests", async () => {
    const response = await axios.get("http://localhost:3001/api/v1/tests/alltest");
    console.log("from the store",response.data);
    return response.data;
  });

//   export const fetchTest = createAsyncThunk("clients/client", async (id) => {
//     const response = await axios.get(`http://localhost:3001/api/v1/tests/${id}`);
//     return response.data;
//   });

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


  export const testSlice= createSlice({
    name: "test",
    initialState: {
      test:null,
      tests: {
        items: [],
       
      },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },
 
    reducers: {},

    extraReducers(builder) {
     
      builder.addCase(fetchTests.fulfilled, (state, action) => {
        state.tests.items = action.payload;
      
      });

    //   builder.addCase(fetchTest.fulfilled, (state, action) => {
    //     state.test = action.payload;
    //   });
    },
  });
  export default testSlice.reducer;
