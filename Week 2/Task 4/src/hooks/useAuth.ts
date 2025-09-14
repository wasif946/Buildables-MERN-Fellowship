import { useCallback, useEffect, useState } from "react";

type User = Record<string, any> | null;

export function useAuth(storageKey = "auth_token") {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(storageKey));
  const [user, setUser] = useState<User>(() => {
    const raw = localStorage.getItem("auth_user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem(storageKey, token);
    } else {
      localStorage.removeItem(storageKey);
      localStorage.removeItem("auth_user");
    }
  }, [token, storageKey]);

  const login = useCallback((newToken: string, userObj?: any) => {
    setToken(newToken);
    if (userObj) {
      localStorage.setItem("auth_user", JSON.stringify(userObj));
      setUser(userObj);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(storageKey);
    localStorage.removeItem("auth_user");
  }, [storageKey]);

  return {
    token,
    user,
    login,
    logout,
    isAuthenticated: !!token,
    setUser, // expose if needed
  };
}

export default useAuth;
