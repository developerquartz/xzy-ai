import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductDetails } from "./thunk";

const initialState = {
  allProducts: {},
  productDetails: {},
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {})
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {});
    builder
      .addCase(getProductDetails.pending, (state, action) => {})
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {});
  },
});

export default productSlice.reducer;
