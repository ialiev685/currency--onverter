import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencies-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    currencyReducer,
  },
});
