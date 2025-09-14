// src/tests/useAuth.test.ts
import { renderHook, act } from "@testing-library/react";
import { useAuth } from "../hooks/useAuth";
import { beforeEach, describe, expect, it } from "vitest";

describe("useAuth", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("login and logout works", () => {
    const { result } = renderHook(() => useAuth());

    // login with user object (not token string anymore)
    act(() => result.current.login({ name: "Wasif" }));

    expect(result.current.isAuthenticated).toBe(true);
    expect(localStorage.getItem("auth_user")).toBe(
      JSON.stringify({ name: "Wasif" })
    );

    act(() => result.current.logout());
    expect(result.current.isAuthenticated).toBe(false);
    expect(localStorage.getItem("auth_user")).toBeNull();
  });
});
