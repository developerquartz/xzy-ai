import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllContentPages = createAsyncThunk(
  "contentPages/contentPages",
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
        `contentPages/${query ? `?${query}` : ""}`
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getContentPageDetails = createAsyncThunk(
  "contentPages/getDetails",
  async (contentPageId, Thunk) => {
    try {
      const response = await axios.get(`contentPages/${contentPageId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateContentPageDetails = createAsyncThunk(
  "contentPages/update",
  async (contentPageDetails, Thunk) => {
    try {
      const response = await axios.put(
        `contentPages/${contentPageDetails.id}`,
        contentPageDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

// export const createContentPages = createAsyncThunk(
//   "contentPages/create",
//   async (contentPageDetails, Thunk) => {
//     try {
//       const response = await axios.post(`contentPages`, contentPageDetails);
//       return response?.data;
//     } catch (error) {
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );

// export const deleteContentPage = createAsyncThunk(
//   "contentPages/delete",
//   async (contentPageId, Thunk) => {
//     try {
//       const response = await axios.delete(`contentPages/${contentPageId}`);
//       return response?.data;
//     } catch (error) {
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );

export const getAboutusPageDetails = createAsyncThunk(
  "contentPages/aboutus",
  async (_, Thunk) => {
    try {
      const response = await axios.get(`pages/aboutus`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getPrivacyPoliciesPageDetails = createAsyncThunk(
  "contentPages/privacy_policies",
  async (_, Thunk) => {
    try {
      const response = await axios.get(`pages/privacypolicy`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getTermsConditionsPageDetails = createAsyncThunk(
  "contentPages/terms_and_conditions",
  async (_, Thunk) => {
    try {
      const response = await axios.get(`pages/termandcondition`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
