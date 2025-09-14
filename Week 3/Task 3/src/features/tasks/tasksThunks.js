import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchClient } from "../../utils/fetchClient"; // reuse your Week2 helper
import { replaceTempWithServer, rollbackAdd, markTaskFailed } from "./tasksSlice";

// a simple retry helper you can reuse
async function retryFetch(fn, retries = 2, delay = 500) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt > retries) throw err;
      await new Promise((r) => setTimeout(r, delay * attempt));
    }
  }
}

// fetch tasks (regular)
export const fetchTasksThunk = createAsyncThunk("tasks/fetchAll", async () => {
  return retryFetch(() => fetchClient("https://jsonplaceholder.typicode.com/users")); // returns JSON
});

// create task (server)
export const createTaskThunk = createAsyncThunk("tasks/create", async ({ tempId, task }, thunkAPI) => {
  try {
    const serverTask = await retryFetch(() =>
      fetchClient("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(task),
      })
    );
    // return payload so a listener can replace the temp
    return { tempId, serverTask };
  } catch (err) {
    // bubble error up for rejected action
    return thunkAPI.rejectWithValue({ tempId, error: err.message });
  }
});
