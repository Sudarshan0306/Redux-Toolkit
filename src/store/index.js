import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../reducers/CounterReducer";
import { authSlice } from "../reducers/AuthSlice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
