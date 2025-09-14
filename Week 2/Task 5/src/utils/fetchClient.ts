// src/utils/fetchClient.ts
const cache = new Map<string, Promise<any>>();

export async function fetchWithCache(
  url: string,
  options: { signal?: AbortSignal; ttl?: number; force?: boolean } = {}
): Promise<any> {
  const { signal, force } = options;

  if (!force && cache.has(url)) {
    console.log("Deduped inflight request for", url);
    return cache.get(url)!;
  }

  const fetchPromise = fetch(url, { signal }).then((res) => res.json());
  cache.set(url, fetchPromise);

  return fetchPromise;
}

export function clearCache() {
  cache.clear();
}

// ✅ Default export (for useFetch.test.ts compatibility)
export default fetchWithCache;
