# 📌 Week 3 – Task 3: Async Thunks, Slices & Retry Strategy  

## 🎯 Objective  
Manage complex state with Redux slices and async thunks (or RTK Query); test selectors & thunks for reliability.

---

## 🛠️ Steps Implemented  
1. **Created `tasksSlice.js`**
   - Added initial state for `tasks`, `status`, and `error`.
   - Defined reducers for optimistic updates (add, remove, toggle task).
   - Added extraReducers to handle async thunk lifecycle (`pending`, `fulfilled`, `rejected`).

2. **Implemented Async Thunks**
   - `fetchTasks` – fetches user data from `https://jsonplaceholder.typicode.com/users`.
   - Includes error handling for rejected promises.
   - Uses retry strategy via `retryFetch.js` for resilience against network failures.

3. **Added `retryFetch.js`**
   - Implements **exponential backoff** retry mechanism.
   - Handles transient failures gracefully.

4. **Configured `rootReducer.js`**
   - Combined all slices (auth, theme, tasks) into a single root reducer.

5. **Wrote Unit Tests**
   - **tasksSlice.test.js** – validates reducers & state transitions.
   - **tasksThunks.test.js** – uses `msw` (Mock Service Worker) to mock API responses for reliable async testing.

6. **Connected With Previous Task**
   - Integrated slice into existing Redux store from **Week 3 – Task 1**.
   - Confirmed no excessive re-renders after adding async logic.

---

## 📂 File Structure  

src/
├── app/
│   ├── store.js
│   └── rootReducer.js      # ✅ Newly added root reducer
├── features/
│   └── tasks/
│       ├── tasksSlice.js   # ✅ Slice + reducers
│       ├── tasksThunks.js  # ✅ Async thunks
│       └── __tests__/
│           ├── tasksSlice.test.js
│           └── tasksThunks.test.js
├── utils/
│   └── retryFetch.js       # ✅ Exponential backoff helper

✅ Acceptance Criteria
 Async thunks handle failure gracefully

 Retry logic prevents flaky test failures

 Reducers support optimistic updates

 All tests pass with full coverage

 No excessive re-renders when contexts change

🧪 Test Coverage
Reducers: ✅

Selectors: ✅

Async thunks (with MSW): ✅

Retry strategy: ✅

Run tests locally:

npm test
📊 Results
All test suites passed successfully 🎉

This task completes Week 3’s objectives for state management, async thunks, and reliable error handling.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
