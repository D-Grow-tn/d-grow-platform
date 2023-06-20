import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";
console.log(config);

export const fetchEvents = createAsyncThunk("events/events", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/events`);
  console.log("from the store", response.data);
  return response.data;
});

export const fetchEvent = createAsyncThunk("events/event", async (id) => {
  const response = await axios.get(`${config.API_ENDPOINT}/events/${id}`);
  return response.data;
});

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (body, { dispatch }) => {
    console.log("aaaaa");
    const response = await axios.post(`${config.API_ENDPOINT}/events`, body);
    dispatch(fetchEvent(response.data));
    console.log("event from store", response.data);
    return response.data;
  }
);

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async ({ id, body }, { dispatch }) => {
    const response = await axios.put(
      `${config.API_ENDPOINT}/events/${id}`,
      body
    );
    dispatch(fetchEvent(response.data.id));
    console.log("update event from store",response.data)
    return response.data;
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    event: null,
    events: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events.items = action.payload;
    });

    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.event = action.payload;
    });

    builder.addCase(updateEvent.fulfilled, (state, action) => {
      state.event = action.payload;
    });
  },
});

export default eventSlice.reducer;
