import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useThemeState } from "../contexts/ThemeContext";

test("toggle theme switches between light and dark", () => {
  const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
  const { result } = renderHook(() => useThemeState(), { wrapper });

  expect(result.current.mode).toBe("light");

  act(() => {
    result.current.toggleTheme();
  });

  expect(result.current.mode).toBe("dark");
});
