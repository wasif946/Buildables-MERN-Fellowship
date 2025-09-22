// src/features/tasks/__tests__/tasksThunks.test.js
import { vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";

// Adjust imports to match your actual files:
// - tasksReducer should be the default export of tasksSlice.js
// - fetchTasksThunk should be the exported thunk name from tasksThunks.js
import tasksReducer from "../tasksSlice";
import { fetchTasksThunk } from "../tasksThunks";

// This depends on your fetch helper path. If your thunk uses
// `import { fetchClient } from "../../utils/fetchClient"` then this path works:
import * as fetchClientModule from "../../../utils/fetchClient";

describe("tasksThunks (mocked network)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetchTasksThunk dispatches and updates state (mocked fetchClient)", async () => {
    // Arrange: create a store with only the tasks slice
    const store = configureStore({ reducer: { tasks: tasksReducer } });

    // Mock the fetchClient function used inside your thunks to return predictable data
    // Make sure the mocked function name matches your actual export (fetchClient)
    const fakeResponse = [{ id: 1, name: "Alice", email: "a@x.com" }];
    vi.spyOn(fetchClientModule, "fetchClient").mockResolvedValue(fakeResponse);

    // Act: dispatch the thunk (it should use the mocked fetchClient)
    await store.dispatch(fetchTasksThunk());

    // Assert: store should have the mocked item
    const state = store.getState().tasks;
    expect(state.items).toHaveLength(1);
    expect(state.items[0].name).toBe("Alice");
  });
});
