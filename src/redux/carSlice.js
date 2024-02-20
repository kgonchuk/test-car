import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCars } from "./operations";

const carSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    advertsForFilter: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    clearCarsData: (state) => {
      state.adverts = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.advertsForFilter = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const { clearCarsData } = carSlice.actions;
export const catalogReducer = carSlice.reducer;
