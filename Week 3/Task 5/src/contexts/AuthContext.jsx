import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (newUser, newToken) => {
    setUser(newUser);
    setToken(newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = useMemo(
    () => ({ user, token, login, logout, isAuthenticated: !!user }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthState() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthState must be used within AuthProvider");
  return ctx;
}
