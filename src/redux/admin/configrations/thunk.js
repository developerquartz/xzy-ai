import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSettingConfigs = createAsyncThunk(
  "configrations/getConfigs",
  async (_, Thunk) => {
    try {
      const response = await axios.get(`configs`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const addSettingConfigs = createAsyncThunk(
  "configrations/postConfigs",
  async (configDetails, Thunk) => {
    try {
      const response = await axios.post(`configs`, configDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
