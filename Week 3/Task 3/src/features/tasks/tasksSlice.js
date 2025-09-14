import { createSlice } from "@reduxjs/toolkit";
import { fetchTasksThunk, createTaskThunk, updateTaskThunk, deleteTaskThunk } from "./tasksThunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
  // for optimistic operations
  optimisticMap: {}, // tempId -> true
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskOptimistic(state, action) {
      const temp = action.payload; // { id: temp-..., title, completed, optimistic: true }
      state.items.unshift(temp);
      state.optimisticMap[temp.id] = true;
    },
    rollbackAdd(state, action) {
      const tempId = action.payload;
      state.items = state.items.filter((t) => t.id !== tempId);
      delete state.optimisticMap[tempId];
    },
    replaceTempWithServer(state, action) {
      const { tempId, serverTask } = action.payload;
      const idx = state.items.findIndex((t) => t.id === tempId);
      if (idx !== -1) state.items[idx] = serverTask;
      delete state.optimisticMap[tempId];
    },
    markTaskFailed(state, action) {
      const id = action.payload;
      const t = state.items.find((x) => x.id === id);
      if (t) t.__failed = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchTasksThunk.rejected, (state, action) => { state.loading = false; state.error = action.error; });

    // optionally handle create/update/delete fulfilled/rejected if you don't use optimistic actions for them
  }
});

export const { addTaskOptimistic, rollbackAdd, replaceTempWithServer, markTaskFailed } = tasksSlice.actions;
export default tasksSlice.reducer;
