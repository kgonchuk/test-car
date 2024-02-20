export const selectAdverts = (state) => state.catalog.adverts;

export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error;

export const selectCarsFilter = (state) => state.catalog.advertsForFilter;
export const selectAmountCars = (state) => state.catalog.adverts.length;

export const selectFavorites = (state) => state.favorite.favoriteArray;

export const selectOnFilter = (state) => state.filter.onFilter;
export const selectBrand = (state) => state.filter.brand;
export const selectPrice = (state) => state.filter.price;
export const selectMileageFrom = (state) => state.filter.mileageFrom;
export const selectMileageTo = (state) => state.filter.mileageTo;
