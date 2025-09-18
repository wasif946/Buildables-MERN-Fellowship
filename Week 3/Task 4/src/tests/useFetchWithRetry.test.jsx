import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFetchWithRetry from "../hooks/useFetchWithRetry";

beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ id: 1, title: "Test Todo" }),
    })
  );
});

afterAll(() => {
  vi.restoreAllMocks();
});

test("useFetchWithRetry fetches data", async () => {
  const { result } = renderHook(() =>
    useFetchWithRetry("https://jsonplaceholder.typicode.com/todos/1")
  );

  await waitFor(() => {
    expect(result.current.data).toHaveProperty("id", 1);
  });
});
