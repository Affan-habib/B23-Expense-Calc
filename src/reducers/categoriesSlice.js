import { createSlice } from "@reduxjs/toolkit";

let nextCategoryId = 0;

const categoriesSlice = createSlice({
  name: "categories",
  initialState: ["House Rent", "Food","Shopping"],
  reducers: {
    addCategory(state, action) {
      state.push(action.payload);
    },
    
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
