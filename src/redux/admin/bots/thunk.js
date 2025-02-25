import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBots = createAsyncThunk(
  "bots/getAll",
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

      const response = await axios.get(`bots/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createBot = createAsyncThunk(
  "bots/create",
  async (botDetails, Thunk) => {
    try {
      const response = await axios.post(`bots`, botDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getBotDetails = createAsyncThunk(
  "bots/getDetails",
  async (botId, Thunk) => {
    try {
      const response = await axios.get(`bots/${botId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateBotDetails = createAsyncThunk(
  "bots/update",
  async (botDetails, Thunk) => {
    try {
      const response = await axios.put(`bots/${botDetails.id}`, botDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteBot = createAsyncThunk(
  "bots/delete",
  async (botId, Thunk) => {
    try {
      const response = await axios.delete(`bots/${botId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
