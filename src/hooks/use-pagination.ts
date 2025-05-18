import { useMemo } from "react";

export const usePaginationRange = (
  totalPages: number,
  currentPage: number
): number[] => {
  const currentIndex = currentPage - 1;
  const leftSiblingIndex = currentIndex - 1;
  const rightSiblingIndex = currentIndex + 1;

  const totalCount = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  const showLeftDots = totalPages > 7 && leftSiblingIndex > 2;
  const showRightDots = totalPages > 7 && rightSiblingIndex < totalPages - 3;

  if (!showLeftDots && !showRightDots) return totalCount;

  if (!showLeftDots && showRightDots) {
    const range = totalCount.slice(0, 5);
    return [...range, -1, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const range = totalCount.slice(totalPages - 5, totalPages);
    return [1, -1, ...range];
  }

  const range = totalCount.slice(leftSiblingIndex, rightSiblingIndex + 1);
  return [1, -1, ...range, -1, totalPages];
};
