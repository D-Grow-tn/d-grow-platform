import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";





export const fetchClients = createAsyncThunk("clients/clients", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/clients`);
  console.log("from the store", response.data);
  return response.data;
});

export const fetchClient = createAsyncThunk("clients/client", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/clients/${id}`);
  return response.data;
});

export const createClient = createAsyncThunk(
  "client/create",
  async (body,{dispatch}) => {
    const response = await axios.post(
      `${config.API_ENDPOINT}/clients`,
      body
    );
    dispatch(fetchClients())
    console.log("create datazaaaaaaaaa",response.data);
    return response.data
  }
);
export const updateClient = createAsyncThunk("clients/Update", async (form) => {
  const { clientId, ...rest } = form;
  await axios.patch(`${config.API_ENDPOINT}/clients/${clientId}`, {
    ...rest,
  });

  const updatedClientResponse = await axios.get(
    `${config.API_ENDPOINT}/clients/${clientId}`
  );
  console.log("cccccc", updatedClientResponse.data);
  return updatedClientResponse.data;
});

export const removeClient = createAsyncThunk(
  "clients/deleteClient",
  async (id, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("tokenAdmin"));
    const configs = {
      headers: {
        Authorization: "Bearer " + token.Authorization,
      },
    }; 
    const response = await axios.delete(
      `${config.API_ENDPOINT}/clients/${id}`,
      configs
    );
    dispatch(fetchClients());
    return response.data;
  }
);

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    client: null,
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

    builder.addCase(updateClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
  },
});
export default clientSlice.reducer;
