import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useAuth from "../hooks/useAuth";

beforeEach(() => {
  localStorage.clear();
});

describe("useAuth", () => {
  it("login and logout works", () => {
    const { result } = renderHook(() => useAuth());
    act(() => result.current.login("token-123", { name: "Wasif" }));
    expect(result.current.isAuthenticated).toBe(true);
    expect(localStorage.getItem("auth_token")).toBe("token-123");
    act(() => result.current.logout());
    expect(result.current.isAuthenticated).toBe(false);
    expect(localStorage.getItem("auth_token")).toBeNull();
  });
});
