import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCredits = createAsyncThunk(
  "creditPlans/getAll",
  async (filters, Thunk) => {
    try {
      const queryParams = [];

      if (filters?.page) {
        queryParams.push(`pageNo=${filters.page}`);
      }
      if (filters?.limit) {
        queryParams.push(`pageSize=${filters.limit}`);
      }
      if (filters?.order) {
        queryParams.push(`order=${filters.order}`);
      }
      if (filters?.orderBy) {
        queryParams.push(`orderBy=${filters.orderBy}`);
      }
      if (filters?.serverPaging) {
        queryParams.push(`serverPaging=${filters.serverPaging}`);
      }
      if (filters?.search) {
        queryParams.push(`search=${filters.search}`);
      }
      const query = queryParams.join("&");

      const response = await axios.get(
        `creditPlans/${query ? `?${query}` : ""}`
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createCreditPlan = createAsyncThunk(
  "creditPlans/create",
  async (creditPlanDetails, Thunk) => {
    try {
      const response = await axios.post(`creditPlans`, creditPlanDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getCreditPlanDetails = createAsyncThunk(
  "creditPlans/getDetails",
  async (planId, Thunk) => {
    try {
      const response = await axios.get(`creditPlans/${planId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateCreditPlanDetails = createAsyncThunk(
  "creditPlans/update",
  async (creditPlanDetails, Thunk) => {
    try {
      const response = await axios.put(
        `creditPlans/${creditPlanDetails.id}`,
        creditPlanDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteCreditPlan = createAsyncThunk(
  "creditPlans/delete",
  async (creditPlanId, Thunk) => {
    try {
      const response = await axios.delete(`creditPlans/${creditPlanId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
