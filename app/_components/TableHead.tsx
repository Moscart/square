import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";
import React from "react";

interface TableHeadProps {
  handleSort: (name: string) => void;
  sortBy: string;
  order: string;
  label: string;
  name: string;
}

export default function TableHead({
  handleSort,
  sortBy,
  order,
  label,
  name,
}: Readonly<TableHeadProps>) {
  return (
    <button
      className="flex items-center justify-between gap-4 w-full cursor-pointer"
      onClick={() => handleSort(name)}
    >
      <span>{label}</span>
      {sortBy === name && order === "asc" && (
        <ArrowUp2 size={16} variant="Bold" />
      )}
      {sortBy === name && order === "desc" && (
        <ArrowDown2 size={16} variant="Bold" />
      )}
      {sortBy !== name && (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.900009 8L3.40001 10.5L5.90001 8M0.900009 4L3.40001 1.5L5.90001 4"
            stroke="#98949E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
