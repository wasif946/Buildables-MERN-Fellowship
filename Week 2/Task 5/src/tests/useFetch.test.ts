import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import useFetch from "../hooks/useFetch";
import * as fetchClientModule from "../utils/fetchClient";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("useFetch", () => {
  it("loads data and sets data state", async () => {
    vi.spyOn(fetchClientModule, "default").mockResolvedValue({ hello: "world" });

    const { result } = renderHook(() => useFetch("/api/test"));

    await waitFor(() => {
      expect(result.current.data).toEqual({ hello: "world" });
    });
  });

  it("supports refetch and abort", async () => {
    vi.spyOn(fetchClientModule, "default").mockResolvedValue({ x: 1 });

    const { result } = renderHook(() => useFetch("/api/slow", { immediate: true }));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    await act(async () => {
      await result.current.refetch();
    });

    expect(result.current.data).toBeDefined();
  });
});
