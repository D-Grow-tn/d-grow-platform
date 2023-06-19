import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchEmployees = createAsyncThunk(
  "employees/employees",
  async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/employees`);

    return response.data;
  }
);

export const fetchEmployee = createAsyncThunk(
  "employee/employee",
  async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/employees/${id}`);
    return response.data;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/create",
  async (body,{dispatch}) => {
    const response = await axios.post(
      `${config.API_ENDPOINT}/employees`,
      body
    );
    dispatch(fetchEmployees())
    return response.data
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: null,
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
