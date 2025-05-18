import { useState, useCallback, useMemo } from "react";

interface UseTableOptions<T> {
  data: T[];
  pageSize?: number;
}

export function useTable<T>({ data, pageSize = 10 }: UseTableOptions<T>) {
  const [openRowId, setOpenRowId] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const toggleRowMenu = useCallback((id: number) => {
    setOpenRowId((prev) => (prev === id ? null : id));
  }, []);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  return {
    rows: paginatedData,
    openRowId,
    toggleRowMenu,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
