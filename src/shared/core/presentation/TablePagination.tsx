"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TablePaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  canPrevious: boolean;
  canNext: boolean;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
  canPrevious,
  canNext,
}) => {
  const startRange = currentPage * perPage + 1;
  const endRange = Math.min((currentPage + 1) * perPage, total);

  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="text-sm text-gray-700">
          Showing {startRange}-{endRange} of {total}
        </span>
      </div>
      <div className="flex items-center justify-evenly px-1 bg-white border-slate-200 border rounded-lg w-28">
        <button
          disabled={!canPrevious}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex flex-1 justify-center text-sm text-gray-700 border-r"
        >
          <ChevronLeft className={canPrevious ? "" : "opacity-50"} size={24} />
        </button>
        <button
          disabled={!canNext}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex flex-1 justify-center text-sm text-gray-700"
        >
          <ChevronRight className={canNext ? "" : "opacity-50"} size={24} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
