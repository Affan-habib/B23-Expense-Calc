import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import categoriesReducer from "./categoriesSlice";
import expensesReducer from "./expensesSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["categories", "expenses"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
