// src/FetchClient.ts
const cache = new Map<string, Promise<any>>();

export default async function fetchClient(url: string): Promise<any> {
  if (cache.has(url)) {
    console.log("Deduped request for", url);
    return cache.get(url)!;
  }

  const fetchPromise = fetch(url).then((res) => res.json());
  cache.set(url, fetchPromise);
  return fetchPromise;
}
