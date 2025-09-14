import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import usePagination from "../hooks/usePagination";

describe("usePagination", () => {
  it("paginates array", () => {
    const items = Array.from({ length: 25 }, (_, i) => i + 1);
    const { result } = renderHook(() => usePagination(items, 1, 10));
    expect(result.current.total).toBe(3);
    expect(result.current.paginated.length).toBe(10);
    act(() => result.current.next());
    expect(result.current.page).toBe(2);
  });
});
