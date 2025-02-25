import { createSlice } from "@reduxjs/toolkit";
import { getAllPromptSections, getAllScripts, getScriptDetails } from "./thunk";

const initialState = {
  allScripts: {},
  scriptDetails: {},
  allPromptSections: {},
};

const promptSlice = createSlice({
  name: "promptSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllScripts.pending, (state, action) => {})
      .addCase(getAllScripts.fulfilled, (state, action) => {
        state.allScripts = action.payload;
      })
      .addCase(getAllScripts.rejected, (state, action) => {});
    builder
      .addCase(getScriptDetails.pending, (state, action) => {})
      .addCase(getScriptDetails.fulfilled, (state, action) => {
        state.scriptDetails = action.payload;
      })
      .addCase(getScriptDetails.rejected, (state, action) => {});
    builder
      .addCase(getAllPromptSections.pending, (state, action) => {})
      .addCase(getAllPromptSections.fulfilled, (state, action) => {
        state.allPromptSections = action.payload;
      })
      .addCase(getAllPromptSections.rejected, (state, action) => {});
  },
});

export default promptSlice.reducer;
