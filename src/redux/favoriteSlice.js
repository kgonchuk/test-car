import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteArray: [],
    totalFavoriteCars: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favoriteArray.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favoriteArray = state.favoriteArray.filter(
        (car) => car.id !== payload.id
      );
    },
    setTotalCars: (state, action) => {
      state.totalFavoriteCars = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setTotalCars } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
