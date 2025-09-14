import { useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  if (!users) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
