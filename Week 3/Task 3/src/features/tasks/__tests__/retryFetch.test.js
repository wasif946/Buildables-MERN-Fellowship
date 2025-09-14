import retryFetch from "../../../utils/retryFetch";

describe("retryFetch", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("retries and fails gracefully", async () => {
    const mockFetch = vi
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("fail"))
      .mockRejectedValueOnce(new Error("fail"))
      .mockRejectedValueOnce(new Error("fail"));

    await expect(retryFetch("https://example.com", {}, 3)).rejects.toThrow("fail");

    expect(mockFetch).toHaveBeenCalledTimes(3);
  });

  test("resolves successfully after retry", async () => {
    const mockFetch = vi
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      });

    const result = await retryFetch("https://example.com", {}, 2);

    expect(result).toEqual({ success: true });
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});
