import { createSlice } from "@reduxjs/toolkit";
import { buySubscription } from "./thunk";

const initialState = {
  subscriptionPurchaseUrl: "",
};

const subscriptionPurchaseSlice = createSlice({
  name: "subscriptionPurchaseSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buySubscription.pending, (state, action) => {})
      .addCase(buySubscription.fulfilled, (state, action) => {
        state.subscriptionPurchaseUrl = action.payload?.data;
      })
      .addCase(buySubscription.rejected, (state, action) => {});
    // builder
    //   .addCase(getPriceDetails.pending, (state, action) => {})
    //   .addCase(getPriceDetails.fulfilled, (state, action) => {
    //     state.priceDetails = action.payload;
    //   })
    //   .addCase(getPriceDetails.rejected, (state, action) => {});
  },
});

export default subscriptionPurchaseSlice.reducer;
