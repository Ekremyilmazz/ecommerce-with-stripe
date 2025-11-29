"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages: (number | "...")[] = [];

    if (currentPage > 2) pages.push(1);
    if (currentPage > 3) pages.push("...");

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) pages.push("...");
    if (currentPage < totalPages - 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-center mt-6 items-center gap-3">
      <button
        className="px-3 py-1 border rounded disabled:opacity-40"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      <div className="flex items-center gap-2">
        {getPageNumbers(currentPage, totalPages).map((page, idx) => {
          if (page === "...") {
            return (
              <span key={idx} className="px-2 py-1">
                ...
              </span>
            );
          }

          return (
            <button
              key={idx}
              className={`px-3 py-1 border rounded ${
                page === currentPage ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="px-3 py-1 border rounded disabled:opacity-40"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
