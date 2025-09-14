// src/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import DataList from "./components/DataList";
import RenderProfiler from "./contexts/RenderProfiler";

// Pages
function Home() {
  return (
    <div>
      <h2>Welcome to Router SPA</h2>
      <p>Use the navigation above to explore data fetching with retry & cache.</p>
    </div>
  );
}

function UsersPage() {
  return (
    <div>
      <h2>Users List</h2>
      <RenderProfiler id="DataList">
        <DataList />
      </RenderProfiler>
    </div>
  );
}

// Navbar with Theme toggle
function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <button onClick={toggleTheme}>
        Toggle Theme (Current: {theme})
      </button>
    </nav>
  );
}

// Layout wrapper
function Layout({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout>
        <UsersPage />
      </Layout>
    ),
  },
]);

export default router;
