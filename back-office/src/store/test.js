import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 import config from "../configs";

export const fetchTests = createAsyncThunk("test/testes", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/testes`);
    console.log("tests store",response.data);
    return response.data;
  });

  export const removeTests = createAsyncThunk("test/test",async(id)=>{
    const response = await axios.delete(`${config.API_ENDPOINT}/testes/${id}`)
    return response.data
  })
  export const fetchTest = createAsyncThunk("test/test", async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/testes/${id}`);
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
       console.log(state.tests.items,"state.tests.items");
      });

      builder.addCase(fetchTest.fulfilled, (state, action) => {
        state.test = action.payload;
      });
    },
  });
  export default testSlice.reducer;
