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
export const fetchEmployeeTree = createAsyncThunk(
  "employee/treeEmployee",
  async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.get(
      `${config.API_ENDPOINT}/employees/my-tree`,
      configs
    );

    return response.data;
  }
);

export const fetchEmployee = createAsyncThunk(
  "employee/employee",
  async (id) => {
    const response = await axios.get(
      `${config.API_ENDPOINT}/employees/one/${id}`
    );
    return response.data;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/create",
  async (body, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.post(
      `${config.API_ENDPOINT}/employees`,
      body,
      configs
    );
    dispatch(fetchEmployees());

    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/Update",
  async (form) => {
    const { employeeId, ...rest } = form;
    const response = await axios.patch(
      `${config.API_ENDPOINT}/employees/${employeeId}`,
      {
        ...rest,
      }
    );

    return response.data;
  }
);

export const removeEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("tokenAdmin"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.delete(
      `${config.API_ENDPOINT}/employees/${id}`,
      configs
    );
    dispatch(fetchEmployees());
    return response.data;
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
    builder.addCase(fetchEmployeeTree.fulfilled, (state, action) => {
      state.employees.items = action.payload;
    });

    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
  },
});
export default employeeSlice.reducer;
