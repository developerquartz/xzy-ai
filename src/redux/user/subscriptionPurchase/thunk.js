import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const buySubscription = createAsyncThunk(
  "user/subscriptionPurchase/buySubscription",
  async (subscriptionId, Thunk) => {
    try {
      const response = await axios.post(
        `users/subscription/buy`,
        subscriptionId
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
