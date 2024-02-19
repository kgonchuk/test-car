// // export const { onNextPage } = catalogSlice.actions;
// // export default catalogSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCars } from "./operations";

// import { fetchAllCars, filterCars } from "./operations";

// const carSlice = createSlice({
//   name: "catalog",
//   initialState: {
//     adverts: [],

//     allAdverts: [],
//     favorites: [],
//     totalFavoriteCars: [],
//     isLoading: false,
//     isError: null,
//     page: 1,
//     total: 0,
//     totalCount: "",
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllCars.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllCars.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = null;
//         state.adverts = action.payload;
//         state.total = action.payload.length;
//         state.totalCount = action.payload.totalCount;
//         // state.adverts = [...state.adverts, ...action.payload];
//       })
//       .addCase(fetchAllCars.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.payload;
//       })
//       .addCase(filterCars.fulfilled, (state, action) => {
//         state.adverts = action.payload.cars;
//         state.totalCount = action.payload.totalCount;
//         state.isLoading = false;
//       })
//       .addCase(filterCars.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.payload;
//       })
//       .addCase(filterCars.pending, (state, action) => {
//         state.isLoading = true;
//       });
//   },
//   reducers: {
//     onNextPage: (state) => {
//       state.page = state.page + 1;
//     },

//     addToFavorites: (state, action) => {
//       state.favorites.push(action.payload);
//     },
//     removeFromFavorites: (state, action) => {
//       const index = state.favorites.findIndex(
//         (item) => item.id === action.payload
//       );
//       state.favorites.splice(index, 1);
//     },
//     setTotalCars: (state, action) => {
//       state.totalFavoriteCars = action.payload;
//     },
//   },
// });
// export const { onNextPage, addToFavorites, removeFromFavorites, setTotalCars } =
//   carSlice.actions;
// export const catalogReducer = carSlice.reducer;

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

        state.advertsForFilter = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
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
