import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllScripts = createAsyncThunk(
  "scripts/getAllScripts",
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

      const response = await axios.get(`scripts/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createScript = createAsyncThunk(
  "scripts/create",
  async (scriptDetails, Thunk) => {
    try {
      const response = await axios.post(`scripts`, scriptDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getScriptDetails = createAsyncThunk(
  "scripts/getScriptDetails",
  async (scriptId, Thunk) => {
    try {
      const response = await axios.get(`scripts/${scriptId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateScriptDetails = createAsyncThunk(
  "scripts/update",
  async (scriptDetails, Thunk) => {
    try {
      const response = await axios.put(
        `scripts/${scriptDetails.id}`,
        scriptDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteScript = createAsyncThunk(
  "scripts/delete",
  async (scriptId, Thunk) => {
    try {
      const response = await axios.delete(`scripts/${scriptId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getAllPromptSections = createAsyncThunk(
  "scripts/prompts/section",
  async (_, Thunk) => {
    try {
      const response = await axios.post(`prompts/section`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
