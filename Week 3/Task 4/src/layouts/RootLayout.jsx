import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />  {/* ✅ this is where child routes (Home/Users) appear */}
      </main>
    </div>
  );
}
