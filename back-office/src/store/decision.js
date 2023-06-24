import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchDecisions = createAsyncThunk(
  "decisions/decisions",
  async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/Decisions`);
    return response.data;
  }
);

export const createDecision = createAsyncThunk(
  "decision/create",
  async (body, { dispatch }) => {
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
    console.log("====================================");
    console.log(response.data, "wayou");
    console.log("====================================");
    return response.data;
  }
);

export const updateDecision = createAsyncThunk(
  "decisions/Update",
  async (form) => {
    const { decisionId, ...rest } = form;
    await axios.patch(`${config.API_ENDPOINT}/Decisions/${decisionId}`, {
      ...rest,
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
    let token = JSON.parse(localStorage.getItem("tokenAdmin"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.delete(
      `${config.API_ENDPOINT}/Decisions/${id}`,
      configs
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
