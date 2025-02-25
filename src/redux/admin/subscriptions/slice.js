import { createSlice } from "@reduxjs/toolkit";
import {
  getAllBonus,
  getAllSubscriptions,
  getBonusDetails,
  getPriceDetails,
  getPriceList,
  getSubscriptionsDetails,
} from "./thunk";

const initialState = {
  allSubscriptions: {},
  allBonus: {},
  subscriptionDetails: {},
  bonusDetails: {},
  subscriptionPriceList: {},
  priceDetails: {},
};

const subscriptionSlice = createSlice({
  name: "subscriptionSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSubscriptions.pending, (state, action) => {})
      .addCase(getAllSubscriptions.fulfilled, (state, action) => {
        state.allSubscriptions = action.payload;
      })
      .addCase(getAllSubscriptions.rejected, (state, action) => {});
    builder
      .addCase(getAllBonus.pending, (state, action) => {})
      .addCase(getAllBonus.fulfilled, (state, action) => {
        state.allBonus = action.payload;
      })
      .addCase(getAllBonus.rejected, (state, action) => {});
    builder
      .addCase(getSubscriptionsDetails.pending, (state, action) => {})
      .addCase(getSubscriptionsDetails.fulfilled, (state, action) => {
        state.subscriptionDetails = action.payload;
      })
      .addCase(getSubscriptionsDetails.rejected, (state, action) => {});
    builder
      .addCase(getBonusDetails.pending, (state, action) => {})
      .addCase(getBonusDetails.fulfilled, (state, action) => {
        state.bonusDetails = action.payload;
      })
      .addCase(getBonusDetails.rejected, (state, action) => {});
    builder
      .addCase(getPriceList.pending, (state, action) => {})
      .addCase(getPriceList.fulfilled, (state, action) => {
        state.subscriptionPriceList = action.payload;
      })
      .addCase(getPriceList.rejected, (state, action) => {});
    builder
      .addCase(getPriceDetails.pending, (state, action) => {})
      .addCase(getPriceDetails.fulfilled, (state, action) => {
        state.priceDetails = action.payload;
      })
      .addCase(getPriceDetails.rejected, (state, action) => {});
  },
});

export default subscriptionSlice.reducer;
