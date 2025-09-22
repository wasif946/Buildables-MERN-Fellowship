import { describe, it, expect } from "vitest";
import tasksReducer, {
  addTaskOptimistic,
  rollbackAdd,
  replaceTempWithServer,
  markTaskFailed,
} from "../tasksSlice";

describe("tasksSlice reducer", () => {
  it("should handle optimistic add", () => {
    const tempTask = { id: "temp-1", name: "Test Task", optimistic: true };
    const state = tasksReducer(undefined, addTaskOptimistic(tempTask));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject(tempTask);
    expect(state.optimisticMap["temp-1"]).toBe(true);
  });

  it("should rollback added task", () => {
    const initialState = {
      items: [{ id: "temp-1", name: "Rollback me" }],
      loading: false,
      error: null,
      optimisticMap: { "temp-1": true },
    };
    const state = tasksReducer(initialState, rollbackAdd("temp-1"));
    expect(state.items).toHaveLength(0);
    expect(state.optimisticMap["temp-1"]).toBeUndefined();
  });

  it("should replace temp with server task", () => {
    const initialState = {
      items: [{ id: "temp-1", name: "Old name" }],
      loading: false,
      error: null,
      optimisticMap: { "temp-1": true },
    };
    const serverTask = { id: 123, name: "Real name" };
    const state = tasksReducer(
      initialState,
      replaceTempWithServer({ tempId: "temp-1", serverTask })
    );
    expect(state.items[0]).toEqual(serverTask);
    expect(state.optimisticMap["temp-1"]).toBeUndefined();
  });

  it("should mark task failed", () => {
    const initialState = {
      items: [{ id: "123", name: "Should fail" }],
      loading: false,
      error: null,
      optimisticMap: {},
    };
    const state = tasksReducer(initialState, markTaskFailed("123"));
    expect(state.items[0].__failed).toBe(true);
  });
});
