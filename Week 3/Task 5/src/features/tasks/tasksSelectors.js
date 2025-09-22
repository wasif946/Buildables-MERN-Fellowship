import { createSelector } from "@reduxjs/toolkit";

const selectTasksState = (state) => state.tasks;

export const selectAllTasks = createSelector(selectTasksState, (s) => s.items);
export const selectTasksLoading = createSelector(selectTasksState, (s) => s.loading);
export const selectTasksError = createSelector(selectTasksState, (s) => s.error);

// example: select only non-optimistic items (or filter failed)
export const selectCompletedTasks = createSelector(selectAllTasks, (items) =>
  items.filter((t) => t.completed)
);
