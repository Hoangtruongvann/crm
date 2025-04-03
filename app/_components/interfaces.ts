interface TableFooterProps {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  perPage: number;
}

export type { TableFooterProps };
