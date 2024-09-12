import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  loading: false,
  error: null,
  house: [],
  createProperty: [],
  detail: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    uploadImageRequest: (state) => {
      state.loading = true;
    },
    uploadImageSuccess: (state, action) => {
      (state.loading = false), (state.image = action.payload);
    },
    uploadImageFailure: (state, action) => {
      (state.loading = false),
        (state.error = {
          message: action.payload?.message || "Unknown error",
          code: action.payload?.code || null,
        });
    },
    fetchPropertyRequest: (state) => {
      state.loading = true;
    },
    fetchPropertySuccess: (state, action) => {
      (state.loading = false), (state.house = action.payload);
    },
    fetchPropertyFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    createPropertyRequest: (state) => {
      state.loading = true;
    },
    createPropertySuccess: (state, action) => {
      (state.loading = false), (state.createProperty = action.payload);
    },
    createPropertyFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },

    fetchPropertyDetailRequest: (state) => {
      state.loading = true;
    },
    fetchPropertyDetailSuccess: (state, action) => {
      (state.loading = false), (state.detail = action.payload);
    },
    fetchPropertyDetailFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export const {
  fetchPropertyFailure,
  fetchPropertyRequest,
  fetchPropertySuccess,
  uploadImageFailure,
  uploadImageRequest,
  uploadImageSuccess,
  createPropertyFailure,
  createPropertyRequest,
    createPropertySuccess,
    fetchPropertyDetailFailure,
    fetchPropertyDetailRequest,
  fetchPropertyDetailSuccess
} = propertySlice.actions;

export default propertySlice.reducer;
