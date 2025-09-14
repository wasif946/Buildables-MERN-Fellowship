import { useEffect, useRef, useState } from "react";
// adapt path to your fetch client file
import fetchClient from "../utils/fetchClient";

export type UseFetchOptions = {
  ttl?: number;
  immediate?: boolean; // default true
  force?: boolean;     // bypass cache
};

export function useFetch<T = any>(url: string | null, opts?: UseFetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const controllerRef = useRef<AbortController | null>(null);

  async function doFetch(overrideUrl?: string) {
    const u = overrideUrl ?? url;
    if (!u) return null;
    controllerRef.current?.abort();
    const ac = new AbortController();
    controllerRef.current = ac;
    setLoading(true);
    setError(null);
    try {
      // adapt options shape to your fetch client if needed
      const res = await fetchClient(u, { signal: ac.signal, ttl: opts?.ttl, force: opts?.force });
      setData(res as T);
      return res as T;
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // aborted — ignore or set special state if you want
      } else {
        setError(err);
        throw err;
      }
    } finally {
      setLoading(false);
    }
    return null;
  }

  useEffect(() => {
    if (url && opts?.immediate !== false) {
      doFetch();
    }
    return () => {
      controllerRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]); // if you want to refetch on other deps, pass them via url change or wrap externally

  return { data, loading, error, refetch: doFetch, abort: () => controllerRef.current?.abort() };
}

export default useFetch;
