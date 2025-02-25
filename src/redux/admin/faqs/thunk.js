import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFaqs = createAsyncThunk(
  "faqs/getAll",
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

      const response = await axios.get(`faqs/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createFaq = createAsyncThunk(
  "faqs/create",
  async (faqDetails, Thunk) => {
    try {
      const response = await axios.post(`faqs`, faqDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getFaqDetails = createAsyncThunk(
  "faqs/getDetails",
  async (faqId, Thunk) => {
    try {
      const response = await axios.get(`faqs/${faqId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateFaqDetails = createAsyncThunk(
  "faqs/update",
  async (faqDetails, Thunk) => {
    try {
      const response = await axios.put(`faqs/${faqDetails.id}`, faqDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteFaq = createAsyncThunk(
  "faqs/delete",
  async (faqId, Thunk) => {
    try {
      const response = await axios.delete(`faqs/${faqId}`);
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
