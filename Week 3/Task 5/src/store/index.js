import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  // devTools: true by default in non-prod
});

export default store;
