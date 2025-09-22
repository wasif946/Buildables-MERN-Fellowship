export async function usersLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Response("Failed to load users", { status: res.status });
  return res.json();
}

export async function userLoader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  if (!res.ok) throw new Response("User not found", { status: res.status });
  return res.json();
}
