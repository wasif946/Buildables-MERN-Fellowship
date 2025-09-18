import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
// later: import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  // auth: authReducer,  (add when ready)
});

export default rootReducer;
