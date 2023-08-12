import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchWorkTime= createAsyncThunk("workTimes/workTimes", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/worktimes`);
    console.log(response.data,"responnnnnnnnnnnse")
    return response.data;
  }
  
);

export const createWorkTime = createAsyncThunk("worktime/create", async (body, { dispatch }) => {
    console.log(body,"body")
    const response = await axios.post(`${config.API_ENDPOINT}/worktimes`, body);
    dispatch(fetchWorkTime());
    console.log("worktiiiime", response.data);
    return response.data;
  }
);

export const fetchWorkTimeByEmployee= createAsyncThunk("worktimes/employee",async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/worktimes/by-employee/${id}`);
    console.log("worktiikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkiime", response.data);
    return response.data;
  }
);


export const fetchWorkTimeByDay= createAsyncThunk("worktimes/day",async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/worktimes/by-day/${id}`);
    console.log("daaaaaaay", response.data);
    return response.data;
  }
);




export const workiTmeSlice = createSlice({
  name: "worktime",
  initialState: {
    worktime:null,
    worktimes: {
      items: [],
    },
    worktimeday:{
        items: [],
    },
    error: null,
    
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchWorkTime.fulfilled, (state, action) => {
      state.worktimes.items = action.payload;
    });
    
    builder.addCase(fetchWorkTimeByEmployee.fulfilled, (state, action) => {
      state.worktime = action.payload;
    });

    builder.addCase(fetchWorkTimeByDay.fulfilled, (state, action) => {
        state.worktimeday.items = action.payload;
      });
  

  },
});
export default workiTmeSlice.reducer;
