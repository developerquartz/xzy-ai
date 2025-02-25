import { createSlice } from "@reduxjs/toolkit";
import { getSettingConfigs } from "./thunk";

const initialState = {
  allConfigs: {},
};

const configrationsSlice = createSlice({
  name: "configrationsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSettingConfigs.pending, (state, action) => {})
      .addCase(getSettingConfigs.fulfilled, (state, action) => {
        state.allConfigs = action.payload;
      })
      .addCase(getSettingConfigs.rejected, (state, action) => {});
  },
});

export default configrationsSlice.reducer;
