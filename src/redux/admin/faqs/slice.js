import { createSlice } from "@reduxjs/toolkit";
import { getAllFaqs, getFaqDetails } from "./thunk";

const initialState = {
  allFaqs: {},
  faqDetails: {},
};

const faqSlice = createSlice({
  name: "faqSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFaqs.pending, (state, action) => {})
      .addCase(getAllFaqs.fulfilled, (state, action) => {
        state.allFaqs = action.payload;
      })
      .addCase(getAllFaqs.rejected, (state, action) => {});
    builder
      .addCase(getFaqDetails.pending, (state, action) => {})
      .addCase(getFaqDetails.fulfilled, (state, action) => {
        state.faqDetails = action.payload;
      })
      .addCase(getFaqDetails.rejected, (state, action) => {});
  },
});

export default faqSlice.reducer;
