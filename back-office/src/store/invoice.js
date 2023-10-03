import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchInvoices = createAsyncThunk("invoices/invoices", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/invoice`);
  console.log("from the store", response.data);
  return response.data;
});

export const fetchInvoice = createAsyncThunk("invoices/invoice", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/invoice/${id}`);
  return response.data;
});

export const createInvoice = createAsyncThunk(
  "invoices/createinvoice",
  async (body, { dispatch }) => {
    const response = await axios.post(`${config.API_ENDPOINT}/invoice`, body);
    dispatch(fetchInvoice(response.data));
    return response.data;
  }
);

export const updateInvoice = createAsyncThunk(
  "invoices/updateinvoice",
  async ({ invoiceId, ...body }, { dispatch }) => {
    console.log(body,"<<<<<<<<<<<<<<<<<<body")
    const response = await axios.patch(
      `${config.API_ENDPOINT}/invoice/${invoiceId}`,
      body
    );
    dispatch(fetchInvoice(response.data.id));
    return response.data;
  }
);

export const removeInvoice = createAsyncThunk(
  "invoices/deleteinvoice",
  async (id, { dispatch }) => {
    const response = await axios.delete(`${config.API_ENDPOINT}/invoice/${id}`);
    dispatch(fetchInvoices());
    return response.data;
  }
);

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoice: null,
    invoices: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      state.invoices.items = action.payload;
    });

    builder.addCase(fetchInvoice.fulfilled, (state, action) => {
      state.invoice = action.payload;
    });
  },
});

export default invoiceSlice.reducer;
