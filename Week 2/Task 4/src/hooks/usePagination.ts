import { useMemo, useState } from "react";

export function usePagination<T = any>(items: T[], initialPage = 1, perPage = 10) {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(perPage);

  const total = useMemo(() => Math.max(1, Math.ceil(items.length / limit)), [items.length, limit]);

  const paginated = useMemo(() => {
    const start = (page - 1) * limit;
    return items.slice(start, start + limit);
  }, [items, page, limit]);

  function next() {
    setPage((p) => Math.min(total, p + 1));
  }
  function prev() {
    setPage((p) => Math.max(1, p - 1));
  }
  function goTo(p: number) {
    setPage(Math.max(1, Math.min(total, p)));
  }

  return { page, limit, total, paginated, setLimit, setPage, next, prev, goTo };
}

export default usePagination;
