import { createSlice } from "@reduxjs/toolkit";
import { getAllBots, getBotDetails } from "./thunk";

const initialState = {
  allBots: {},
  botDetails: {},
};

const botSlice = createSlice({
  name: "botSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBots.pending, (state, action) => {})
      .addCase(getAllBots.fulfilled, (state, action) => {
        state.allBots = action.payload;
      })
      .addCase(getAllBots.rejected, (state, action) => {});
    builder
      .addCase(getBotDetails.pending, (state, action) => {})
      .addCase(getBotDetails.fulfilled, (state, action) => {
        state.botDetails = action.payload;
      })
      .addCase(getBotDetails.rejected, (state, action) => {});
  },
});

export default botSlice.reducer;
