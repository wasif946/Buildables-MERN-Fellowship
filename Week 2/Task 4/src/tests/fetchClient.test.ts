// src/tests/fetchClient.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { fetchWithCache, clearCache } from "../utils/fetchClient";

beforeEach(() => {
  clearCache();
  vi.restoreAllMocks();
});

describe("fetchWithCache", () => {
  it("caches responses and avoids duplicate network calls", async () => {
    const mockResponse = { ok: true, json: async () => ({ hello: "world" }) } as any;
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(mockResponse);

    const a = await fetchWithCache("/api/data");
    const b = await fetchWithCache("/api/data");

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(a).toEqual(b);
  });

  it("dedupes concurrent requests (single underlying fetch)", async () => {
    // create a fetch that resolves after small delay
    let resolveFetch: (v: any) => void;
    const fetchPromise = new Promise((res) => (resolveFetch = res)) as any;
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockReturnValue(fetchPromise);

    const p1 = fetchWithCache("/api/dedupe");
    const p2 = fetchWithCache("/api/dedupe");

    // resolve underlying fetch
    resolveFetch!({ ok: true, json: async () => ({ a: 1 }) });

    const [r1, r2] = await Promise.all([p1, p2]);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(r1).toEqual(r2);
  });

  it("supports abort via AbortSignal (rejected promise)", async () => {
    // mock fetch to listen to signal abort
    const fetchMock = vi.fn().mockImplementation((_url, { signal }) => {
      return new Promise((_, reject) => {
        if (signal) {
          signal.addEventListener("abort", () => {
            // emulate browser's AbortError
            reject(new DOMException("Aborted", "AbortError"));
          });
        }
      });
    });
    vi.spyOn(globalThis, "fetch").mockImplementation(fetchMock as any);

    const ac = new AbortController();
    const p = fetchWithCache("/api/abort", { signal: ac.signal });

    ac.abort();

    await expect(p).rejects.toThrow(/Abort/);
  });

  it("force option bypasses cache", async () => {
    const first = { ok: true, json: async () => ({ v: 1 }) } as any;
    const second = { ok: true, json: async () => ({ v: 2 }) } as any;
    const fetchSpy = vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(first)
      .mockResolvedValueOnce(second);

    const a = await fetchWithCache("/api/force");
    const b = await fetchWithCache("/api/force", { force: true });

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(a).not.toEqual(b);
  });
});
