import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to Router SPA 🚀</h2>
      <p>
        This project demonstrates <strong>React Router v6.4+</strong> with 
        nested routes, data loaders, and error boundaries.
      </p>
      <p>
        Navigate to <Link to="/users">Users</Link> to see data fetching in action.
      </p>
    </div>
  );
}
