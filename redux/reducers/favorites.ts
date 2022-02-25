import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types/index";

const initialState = {
  favoritesList: [] as Category[],
};

export const counterSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Category>) => {
      state.favoritesList = [...state.favoritesList, action.payload];
    },
    removeItem: (state, action: PayloadAction<Category>) => {
      state.favoritesList = state.favoritesList.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addItem, removeItem } = counterSlice.actions;

export default counterSlice.reducer;
