import { createSlice } from "@reduxjs/toolkit";
import { createUserFromAdmin, getAllUsers, getUserDetails } from "./thunk";

const initialState = {
  allUsers: {},
  userDetails: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {})
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {});
    builder
      .addCase(getUserDetails.pending, (state, action) => {})
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {});
  },
});

export default userSlice.reducer;
