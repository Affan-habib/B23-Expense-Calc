import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense(state, action) {
      state.push({
        id: moment(action.payload.date).format(),
        title: action.payload.title,
        cost: parseInt(action.payload.cost),
        date: moment(action.payload.date).format('DD-MMMM-YYYY'),
        category: action.payload.category,
      });
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
