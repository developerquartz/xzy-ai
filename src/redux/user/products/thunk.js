import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "user/products/getAll",
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

      const response = await axios.get(`products/${query ? `?${query}` : ""}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "user/products/create",
  async (productDetails, Thunk) => {
    try {
      const response = await axios.post(`products`, productDetails);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "user/products/getDetails",
  async (productId, Thunk) => {
    try {
      const response = await axios.get(`products/${productId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateProductDetails = createAsyncThunk(
  "user/products/update",
  async (productDetails, Thunk) => {
    try {
      const response = await axios.put(
        `products/${productDetails.id}`,
        productDetails
      );
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "user/products/delete",
  async (productId, Thunk) => {
    try {
      const response = await axios.delete(`products/${productId}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
