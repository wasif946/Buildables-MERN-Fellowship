import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Assuming your useAuth hook is in this path
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, render the child components (the HomePage)
  return children;
};

export default ProtectedRoute;