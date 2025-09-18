// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply theme to <html> tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 👇 Provide both theme & mode for backward compatibility with tests
  const value = useMemo(
    () => ({ theme, mode: theme, toggleTheme }), 
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook for consuming theme in components
export function useTheme() {
  return useContext(ThemeContext);
}

// Hook for tests or alternative usage
export function useThemeState() {
  return useContext(ThemeContext);
}
