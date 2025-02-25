import { createSlice } from "@reduxjs/toolkit";
import { getAllPrompts, getPromptDetails, getSectionDetails } from "./thunk";

const initialState = {
  allPrompts: {},
  promptDetails: {},
  sectionDetails: {},
};

const promptSlice = createSlice({
  name: "promptSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrompts.pending, (state, action) => {})
      .addCase(getAllPrompts.fulfilled, (state, action) => {
        state.allPrompts = action.payload;
      })
      .addCase(getAllPrompts.rejected, (state, action) => {});
    builder
      .addCase(getPromptDetails.pending, (state, action) => {})
      .addCase(getPromptDetails.fulfilled, (state, action) => {
        state.promptDetails = action.payload;
      })
      .addCase(getPromptDetails.rejected, (state, action) => {});
    builder
      .addCase(getSectionDetails.pending, (state, action) => {})
      .addCase(getSectionDetails.fulfilled, (state, action) => {
        state.sectionDetails = action.payload;
      })
      .addCase(getSectionDetails.rejected, (state, action) => {});
  },
});

export default promptSlice.reducer;
