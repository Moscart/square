import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import React from "react";

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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <button
            key={i}
            className={`py-2 px-4 ${
              i === currentPage ? isActive.active : isActive.inactive
            }`}
            onClick={() => handlePageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </button>
        ))}
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
