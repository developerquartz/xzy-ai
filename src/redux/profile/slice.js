import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, updateProfile } from "./thunk";

const initialState = {
  userProfile: {},
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {})
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {});
    builder
      .addCase(updateProfile.pending, (state, action) => {})
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {});
  },
});

export default profileSlice.reducer;
