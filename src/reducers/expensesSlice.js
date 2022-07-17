import { createSlice } from "@reduxjs/toolkit";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense(state, action) {
      state.push({
        id: new Date(),
        title: action.payload.title,
        cost: parseInt(action.payload.cost),
        date: today,
        category: action.payload.category,
      });
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
