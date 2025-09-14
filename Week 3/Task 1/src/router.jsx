import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";

// define the loader function here
async function usersLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Response("Failed to fetch users", { status: res.status });
  }

  return res.json();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h2>Something went wrong!</h2>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader, // ✅ loader added
      },
    ],
  },
]);

export default router;
