import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuthState } from "../contexts/AuthContext";

test("login and logout works in AuthContext", () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuthState(), { wrapper });

  act(() => {
    result.current.login({ name: "Alice" }, "123");
  });
  expect(result.current.user.name).toBe("Alice");
  expect(result.current.token).toBe("123");

  act(() => {
    result.current.logout();
  });
  expect(result.current.user).toBeNull();
});
