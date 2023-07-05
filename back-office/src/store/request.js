import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

 export const fetchRequests= createAsyncThunk("requests/requests", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/requests`);

  return response.data;
 });

export const fetchRequest = createAsyncThunk("requests/request", async (id) => {
  const response = await axios.get(
    `http://localhost:3001/api/v1/requests/${id}`
  );
  return response.data;
});

export const fetchRequestsBySender = createAsyncThunk(
  "requests/requestsBySender",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/api/v1/requests/by-sender/${id}`
    );
    return response.data;
  }
);

export const fetchRequestsByReceiver = createAsyncThunk(
  "requests/requestsByReceiver",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/api/v1/requests/by-receiver/${id}`
    );
    return response.data;
  }
);


export const createRequest = createAsyncThunk(
  "requests/createRequest",
  async (body, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    };
    const response = await axios.post(`${config.API_ENDPOINT}/requests`, body,configs);
    dispatch(fetchRequests());
    return response.data;
  }
);

export const removeRequest = createAsyncThunk(
  "requests/deleteRequest",
  async (id, { dispatch }) => {
   
    const response = await axios.delete(
      `${config.API_ENDPOINT}/requests/${id}`,
      
    );
    dispatch(fetchRequestsBySender());
    return response.data;
  }
);
export const updateRequest = createAsyncThunk(
  "requests/UpdateRequest",
  async ({requestId,...body},{dispatch}) => {
    const response = await axios.patch(
      `${config.API_ENDPOINT}/requests/${requestId}`,
      {
        ...body,
      }
    );
    dispatch(fetchRequestsBySender(response.data.id));

    return response.data;
  }
);

export const requestSlice = createSlice({
  name: "request",
  initialState: {
    request: null,
    requests: {
      items: [],
    },
    sentRequests: {
      items: [],
    },
    receivedRequests: {
      items: [],
    },

    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
      builder.addCase(fetchRequests.fulfilled, (state, action) => {
      state.requests.items = action.payload;

     });

     builder.addCase(fetchRequest.fulfilled, (state, action) => {
       state.request = action.payload;
    });

    builder.addCase(fetchRequestsBySender.fulfilled, (state, action) => {
      state.sentRequests.items = action.payload;
      // console.log("====================================");
      // console.log(state.sentRequests.items,"here");
      // console.log("====================================");
    });

    
    builder.addCase(fetchRequestsByReceiver.fulfilled, (state, action) => {
      state.receivedRequests.items = action.payload;
    
   });

    builder.addCase(updateRequest.fulfilled, (state, action) => {
      state.request = action.payload;
    });

  },
});
export default requestSlice.reducer;
