# Custom React Hooks Task (Week 2, Task 4)

This document outlines the objectives, deliverables, and acceptance criteria for Task 4 of Week 2, which focuses on creating custom React hooks.

## Task Description
The primary goal is to **build composable and reusable custom React hooks** with well-defined contracts and comprehensive test coverage.

### Objectives
* Create three core hooks: `useFetch`, `useAuth`, and `usePagination`.
* Establish strict API contracts for each hook.
* Provide clear documentation and unit tests for each hook.

### Steps
* Implement `useFetch`, `useAuth`, and `usePagination` within the `src/hooks` directory.
* Document the API for each hook.
* Write and run unit tests to ensure reliability and correctness.

### Deliverables
* A `hooks` folder containing the implemented hooks.
* Associated test files for each hook.
* Usage examples demonstrating how to use the hooks.

### Acceptance Criteria
The hooks must be:
* **Reusable**: Not tied to a specific application domain.
* **Documented**: Clear and concise API documentation is provided.
* **Tested**: Each hook has passing unit tests with sufficient code coverage.

---

## API Reference

This section provides a detailed breakdown of the API for each custom hook.

### `useFetch(url, options)`

A custom hook for handling data fetching with advanced features like caching, race condition prevention, and request abortion.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `url` | `string` | The API endpoint to fetch data from. |
| `options` | `object` | An optional configuration object. |

#### `options` Object

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `deps` | `React.DependencyList` | `[]` | Dependency array to re-run the fetch when a value changes. |
| `skip` | `boolean` | `false` | If `true`, the initial fetch is skipped. |
| `cacheKey` | `string` | `undefined` | A key to cache and deduplicate network requests. |

#### Returns

The hook returns an object with the following properties:

| Property | Type | Description |
| :--- | :--- | :--- |
| `data` | `T` | The fetched data, typed to match the generic `T`. |
| `error` | `Error` | Any error that occurred during the fetch. |
| `loading` | `boolean` | `true` while the data is being fetched, `false` otherwise. |
| `refetch` | `() => void` | A function to manually trigger a re-fetch. |
| `abort` | `() => void` | A function to abort the ongoing request. |

* **Example:**
```tsx
const { data, loading, error, refetch } = useFetch<User[]>('/api/users', { deps: [query] });

### Running Tests
I wrote unit tests for all hooks using Vitest.
To run them:

npm test
Deliverables
✅ Hooks (useFetch, useAuth, usePagination)

✅ Tests for all hooks (src/tests/)

✅ Documentation (README.md with usage instructions)

🔄 Bonus (optional): Prepare hooks for publishing as an npm package

---

### About This Project
- This is my personal project for Week 2 Task 4.
- It helped me understand React hooks, state management, and test-driven   development, while also preparing my code for real-world reusability.