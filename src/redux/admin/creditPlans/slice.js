import { createSlice } from "@reduxjs/toolkit";
import { getAllCredits, getCreditPlanDetails } from "./thunk";

const initialState = {
  allCreditPlans: {},
  creditPlanDetails: {},
};

const creditPlansSlice = createSlice({
  name: "creditPlansSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCredits.pending, (state, action) => {})
      .addCase(getAllCredits.fulfilled, (state, action) => {
        state.allCreditPlans = action.payload;
      })
      .addCase(getAllCredits.rejected, (state, action) => {});
    builder
      .addCase(getCreditPlanDetails.pending, (state, action) => {})
      .addCase(getCreditPlanDetails.fulfilled, (state, action) => {
        state.creditPlanDetails = action.payload;
      })
      .addCase(getCreditPlanDetails.rejected, (state, action) => {});
  },
});

export default creditPlansSlice.reducer;
