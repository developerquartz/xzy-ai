import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSubscriptions = createAsyncThunk(
  "subscriptions/getAll",
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
        `subscriptions/${query ? `?${query}` : ""}`
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createSubscriptionPlan = createAsyncThunk(
  "subscriptions/create",
  async (subscriptionsDetails, Thunk) => {
    try {
      const response = await axios.post(`subscriptions`, subscriptionsDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateSubscriptionsDetails = createAsyncThunk(
  "subscriptions/update",
  async (subscriptionsDetails, Thunk) => {
    try {
      const response = await axios.put(
        `subscriptions/${subscriptionsDetails.id}`,
        subscriptionsDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getSubscriptionsDetails = createAsyncThunk(
  "subscriptions/getDetails",
  async (subscriptionsId, Thunk) => {
    try {
      const response = await axios.get(`subscriptions/${subscriptionsId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteSubscriptions = createAsyncThunk(
  "subscriptions/delete",
  async (subscriptionsId, Thunk) => {
    try {
      const response = await axios.delete(`subscriptions/${subscriptionsId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getAllBonus = createAsyncThunk(
  "subscriptions/bonus/getAll",
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

      const query = queryParams.join("&");

      const response = await axios.get(`bonus/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createBonus = createAsyncThunk(
  "subscriptions/bonus/create",
  async (bonusDetails, Thunk) => {
    try {
      const response = await axios.post(`bonus`, bonusDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateBonusDetails = createAsyncThunk(
  "subscriptions/bonus/update",
  async (bonusDetails, Thunk) => {
    try {
      const response = await axios.put(
        `bonus/${bonusDetails.id}`,
        bonusDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getBonusDetails = createAsyncThunk(
  "subscriptions/bonus/getDetails",
  async (bonusId, Thunk) => {
    try {
      const response = await axios.get(`bonus/${bonusId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteBonus = createAsyncThunk(
  "subscriptions/bonus/delete",
  async (bonusId, Thunk) => {
    try {
      const response = await axios.delete(`bonus/${bonusId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getPriceList = createAsyncThunk(
  "subscriptions/getPriceList",
  async (_, Thunk) => {
    try {
      const response = await axios.get(`subscriptions/list/price`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getPriceDetails = createAsyncThunk(
  "subscriptions/getPriceDetails",
  async (priceId, Thunk) => {
    try {
      const response = await axios.post(`subscriptions/details/price`, priceId);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
