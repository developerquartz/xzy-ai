import { createSlice } from "@reduxjs/toolkit";
import {
  getAboutusPageDetails,
  getAllContentPages,
  getContentPageDetails,
  getPrivacyPoliciesPageDetails,
  getTermsConditionsPageDetails,
} from "./thunk";

const initialState = {
  allContentPages: {},
  contentPageDetails: [],
  aboutusContent: "",
  privacyPoliciesContent: "",
  termsAndConditionsContent: "",
};

const contentPageSlice = createSlice({
  name: "contentPageSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContentPages.pending, (state, action) => {})
      .addCase(getAllContentPages.fulfilled, (state, action) => {
        state.allContentPages = action.payload;
      })
      .addCase(getAllContentPages.rejected, (state, action) => {});
    builder
      .addCase(getContentPageDetails.pending, (state, action) => {})
      .addCase(getContentPageDetails.fulfilled, (state, action) => {
        const oldIndex = state.contentPageDetails.findIndex(
          (content) => content?.id === action.payload?.data?.id
        );
        if (oldIndex >= 0) {
          state.contentPageDetails[oldIndex] = action.payload?.data;
        } else {
          state.contentPageDetails = [
            ...state.contentPageDetails,
            action.payload?.data,
          ];
        }
      })
      .addCase(getContentPageDetails.rejected, (state, action) => {});
    builder
      .addCase(getAboutusPageDetails.pending, (state, action) => {})
      .addCase(getAboutusPageDetails.fulfilled, (state, action) => {
        state.aboutusContent = action.payload;
      })
      .addCase(getAboutusPageDetails.rejected, (state, action) => {});
    builder
      .addCase(getPrivacyPoliciesPageDetails.pending, (state, action) => {})
      .addCase(getPrivacyPoliciesPageDetails.fulfilled, (state, action) => {
        state.privacyPoliciesContent = action.payload;
      })
      .addCase(getPrivacyPoliciesPageDetails.rejected, (state, action) => {});
    builder
      .addCase(getTermsConditionsPageDetails.pending, (state, action) => {})
      .addCase(getTermsConditionsPageDetails.fulfilled, (state, action) => {
        state.termsAndConditionsContent = action.payload;
      })
      .addCase(getTermsConditionsPageDetails.rejected, (state, action) => {});
  },
});

export default contentPageSlice.reducer;
