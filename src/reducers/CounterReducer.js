import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.counter = initialState.counter;
    },
  },
});
