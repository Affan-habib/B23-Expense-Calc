import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import expensesSlice from "./expensesSlice";
// import expenseSlice from "./expenseSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    expenses:expensesSlice
  },
});
