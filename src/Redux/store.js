import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import todoSlice from "./Slices/todoSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});
export default store;
