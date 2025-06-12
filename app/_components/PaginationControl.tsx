import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import React from "react";

type PageItem = number | string;

interface PaginationControlsProps {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

export default function PaginationControl({
  totalItems,
  currentPage,
  totalPages,
  handlePageChange,
}: Readonly<PaginationControlsProps>) {
  const isActive = {
    active: "font-bold bg-white shadow-[2px_2px_4px_0_#0000000D] rounded-sm",
    inactive: "font-semibold text-muted cursor-pointer hover:text-primary",
  };

  const getPageItems = (): PageItem[] => {
    const pages: PageItem[] = [];
    const delta = 1; // pages around current

    const range = {
      start: Math.max(2, currentPage - delta),
      end: Math.min(totalPages - 1, currentPage + delta),
    };

    pages.push(1);

    if (range.start > 2) {
      pages.push("...");
    }

    for (let i = range.start; i <= range.end; i++) {
      pages.push(i);
    }

    if (range.end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageItems = getPageItems();

  return (
    <div className="max-sm:flex-col flex gap-4 items-center justify-between bg-neutral rounded-lg py-2 px-3">
      <div className="max-sm:text-sm font-semibold text-muted">
        Showing {totalItems} Data Customers
      </div>
      <div className="flex text-sm">
        <button
          className="py-2 px-4 font-semibold text-muted flex items-center gap-3 cursor-pointer hover:text-primary"
          hidden={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowLeft size="16" />
          <span>Previous</span>
        </button>

        {pageItems.map((item, idx) =>
          typeof item === "string" ? (
            <span
              key={item + idx}
              className="py-2 px-4 font-semibold text-muted"
            >
              {item}
            </span>
          ) : (
            <button
              key={item}
              className={`py-2 px-4 ${
                item === currentPage ? isActive.active : isActive.inactive
              }`}
              onClick={() => handlePageChange(item)}
              disabled={item === currentPage}
            >
              {item}
            </button>
          )
        )}

        <button
          className="py-2 px-4 font-semibold text-muted flex items-center gap-3 cursor-pointer hover:text-primary"
          hidden={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <span>Next</span>
          <ArrowRight size="16" />
        </button>
      </div>
    </div>
  );
}
