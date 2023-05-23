import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    value: { name: "", address: "", phoneNumber: "" },
  },
  reducers: {
    profile: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {profile} =clientSlice.actions;
export default clientSlice.reducer;