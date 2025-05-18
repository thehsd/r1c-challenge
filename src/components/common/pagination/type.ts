export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
  disabled?: boolean;
}

export interface PagePillsProps {
  label: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
}
