import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
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
        `admins/search/user${query ? `?${query}` : ""}`
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createUserFromAdmin = createAsyncThunk(
  "user/createUser",
  async (userDetails, Thunk) => {
    try {
      const response = await axios.post(`admins/create/user`, userDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (userId, Thunk) => {
    try {
      const response = await axios.get(`admins/details/user/${userId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async (userDetails, Thunk) => {
    try {
      const response = await axios.put(
        `admins/update/profile/${userDetails.id}`,
        userDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId, Thunk) => {
    try {
      const response = await axios.delete(`admins/remove/user/${userId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
