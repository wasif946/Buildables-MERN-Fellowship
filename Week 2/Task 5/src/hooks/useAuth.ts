// src/hooks/useAuth.ts
import { useCallback, useEffect, useState } from "react";

interface User {
  name: string;
  // extend later with email, role, etc.
}

export function useAuth(storageKey = "auth_user") {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  });

  // persist user in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [user, storageKey]);

  // login with a strongly typed user object
  const login = useCallback(
    (newUser: User) => {
      setUser(newUser);
      localStorage.setItem(storageKey, JSON.stringify(newUser));
    },
    [storageKey]
  );

  // logout clears everything
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(storageKey);
  }, [storageKey]);

  return {
    user,
    login,
    logout,
    isAuthenticated: user !== null,
  };
}

export default useAuth;
