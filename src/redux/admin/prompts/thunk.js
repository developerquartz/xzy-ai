import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPrompts = createAsyncThunk(
  "prompts/getAllPrompts",
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

      const response = await axios.get(`prompts/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createPrompts = createAsyncThunk(
  "prompts/create",
  async (promptsDetails, Thunk) => {
    try {
      const response = await axios.post(`prompts`, promptsDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getPromptDetails = createAsyncThunk(
  "prompts/getPromptDetails",
  async (promptId, Thunk) => {
    try {
      const response = await axios.get(`prompts/${promptId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updatePromoptDetails = createAsyncThunk(
  "prompts/updatePromoptDetails",
  async (promptDetails, Thunk) => {
    try {
      const response = await axios.put(
        `prompts/${promptDetails.id}`,
        promptDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deletePrompt = createAsyncThunk(
  "prompts/deletePrompt",
  async (promptId, Thunk) => {
    try {
      const response = await axios.delete(`prompts/${promptId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createSection = createAsyncThunk(
  "prompts/sections/create",
  async (sectionDetails, Thunk) => {
    try {
      const response = await axios.post(`sections`, sectionDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateSectionDetails = createAsyncThunk(
  "prompts/sections/update",
  async (sectionDetails, Thunk) => {
    try {
      const response = await axios.put(
        `sections/${sectionDetails?.id}`,
        sectionDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteSection = createAsyncThunk(
  "prompts/sections/delete",
  async (sectionId, Thunk) => {
    try {
      const response = await axios.delete(`sections/${sectionId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getSectionDetails = createAsyncThunk(
  "prompts/details",
  async (sectionId, Thunk) => {
    try {
      const response = await axios.get(`prompts/${sectionId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
