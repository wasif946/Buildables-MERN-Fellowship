import { useState, useEffect } from "react";
import { getCache, setCache, hasCache } from "./useCache";

export default function useFetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      if (hasCache(url)) {
        setData(getCache(url).value);
        setLoading(false);
        return;
      }

      let attempt = 0;
      while (attempt < retries && !cancelled) {
        try {
          const res = await fetch(url, options);
          if (!res.ok) throw new Error("Fetch failed");
          const json = await res.json();
          setCache(url, json);
          if (!cancelled) {
            setData(json);
            setError(null);
            setLoading(false);
          }
          return;
        } catch (err) {
          attempt++;
          if (attempt >= retries) {
            if (!cancelled) {
              setError(err);
              setLoading(false);
            }
          } else {
            await new Promise((r) => setTimeout(r, delay));
          }
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, error, loading };
}
