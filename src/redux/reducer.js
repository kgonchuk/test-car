import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./carSlice";
import { favoriteReducer } from "./favoriteSlice";
import { filterReducer } from "./filterSlice";

const favoritePersistConfig = {
  key: "favorite",
  storage,
};

const filterPersistConfig = {
  key: "filter",
  storage,
};

export const reducer = {
  catalog: catalogReducer,
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
};
