// src/pages/LoginPage.tsx
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [name, setName] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isAuthenticated ? "Welcome Back!" : "Login"}
        </h1>

        {isAuthenticated ? (
          <div className="text-center space-y-4">
            <p className="mb-2">
              Hello, <span className="font-semibold">{user?.name}</span> 👋
            </p>
            <Button variant="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              label="Enter your name"
              placeholder="Alice"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              className="w-full"
              onClick={() => login({ name })}
              disabled={!name.trim()}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
