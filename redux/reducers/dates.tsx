import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateState } from "../../types/index";
import moment from "moment";

const initialState: dateState = {
  date: moment().format("MMMM DD, YYYY"),
};

export const counterSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = counterSlice.actions;

export default counterSlice.reducer;
