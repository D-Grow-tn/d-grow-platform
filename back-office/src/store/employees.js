import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchEmployees= createAsyncThunk("employees/employees", async () => {
    const response = await axios.get("http://localhost:3001/api/v1/employees");
    console.log("from the store",response.data);
    return response.data;
  });

  export const fetchEmployee = createAsyncThunk("clients/client", async (id) => {
    const response = await axios.get(`http://localhost:3001/api/v1/employees/${id}`);
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


  export const employeeSlice= createSlice({
    name: "employee",
    initialState: {
      employee:null,
      employees: {
        items: [],
       
      },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },
 
    reducers: {},

    extraReducers(builder) {
     
      builder.addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees.items = action.payload;
      
      });

      builder.addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
      });
    },
  });
  export default employeeSlice.reducer;
