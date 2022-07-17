import { createSlice } from "@reduxjs/toolkit";

let nextExpenseId = 40;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense(state, action) {
      state.push({
        id: new Date(),
        title: action.payload.title,
        cost: parseInt(action.payload.cost),
        date: action.payload.date,
        category: action.payload.category,
      });
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
