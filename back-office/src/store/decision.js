import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchDecisions = createAsyncThunk(
  "decisions/decisions",
  async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/Decisions`);
    console.log(response,"response")
    return response.data;
  }
  
);

export const createDecision = createAsyncThunk(
  "decision/create",
  async (body, { dispatch }) => {
    console.log(body,"body")
    const response = await axios.post(`${config.API_ENDPOINT}/Decisions`, body);
    dispatch(fetchDecisions());
    console.log("decisionNNNN", response.data);
    return response.data;
  }
);

export const fetchDecision = createAsyncThunk(
  "decisions/decision",
  async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/Decisions/${id}`);
    return response.data;
  }
);


export const fetchDecisionByEmployee = createAsyncThunk(
  "decisions/byEmployee",
  async (id) => {
    const response = await axios.get(
      `${config.API_ENDPOINT}/Decisions/by_employee/${id}`
    );

    return response.data;
  }
);


export const updateDecision = createAsyncThunk(
  "decisions/Update",
  async (form) => {
    console.log(form,"form")
    const { decisionId, content,decisionApplyIds } = form
    await axios.patch(`${config.API_ENDPOINT}/Decisions/${decisionId}`, {
      content,
      decisionApplyIds
    });

    const updatedDecisionResponse = await axios.get(
      `${config.API_ENDPOINT}/Decisions/${decisionId}`
    );
    console.log("cccccc", updatedDecisionResponse.data);
    return updatedDecisionResponse.data;
  }
);

export const removeDecision = createAsyncThunk(
  "decisions/deleteDecision",
  async (id, { dispatch }) => {
    
    const response = await axios.delete(
      `${config.API_ENDPOINT}/Decisions/${id}`,
      
    );
    dispatch(fetchDecisions());
    return response.data;
  }
);

export const decisionSlice = createSlice({
  name: "decision",
  initialState: {
    decision: null,
    decisions: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchDecisions.fulfilled, (state, action) => {
      state.decisions.items = action.payload;
    });
    
    builder.addCase(fetchDecisionByEmployee.fulfilled, (state, action) => {
      state.decisions.items = action.payload;
    });

    builder.addCase(fetchDecision.fulfilled, (state, action) => {
      state.decision = action.payload;
    });

    builder.addCase(updateDecision.fulfilled, (state, action) => {
      state.decision = action.payload;
    });
  },
});
export default decisionSlice.reducer;
