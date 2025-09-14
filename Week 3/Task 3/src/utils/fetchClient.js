export async function fetchClient(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}
