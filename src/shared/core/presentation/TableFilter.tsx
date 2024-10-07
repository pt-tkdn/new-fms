import { Printer, Search } from "lucide-react";

import { Input } from "#/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/shared/components/ui/select";

export type ExportType = "Excel" | "PDF" | "CSV";

export interface TableFilterProps {
  onRowChange?: (row: number) => void;
  onSearchChange?: (search: string) => void;
  onExport?: (type: ExportType) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({
  onRowChange,
  onSearchChange,
  onExport,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-1 gap-x-7">
        <Select onValueChange={(value) => onRowChange?.(parseInt(value))}>
          <SelectTrigger className="sm:w-44 w-full">
            <SelectValue placeholder="Show Row" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="10">10 row</SelectItem>
              <SelectItem value="25">25 row</SelectItem>
              <SelectItem value="50">50 row</SelectItem>
              <SelectItem value="100">100 row</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value="" onValueChange={onExport}>
          <SelectTrigger className="sm:w-44 w-full">
            <SelectValue placeholder="Export Data" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Excel">Excel</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
              <SelectItem value="CSV">CSV</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <button className="flex w-28 items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm outline-primary focus-visible:ring-primary ring-offset-white font-bold hover:bg-slate-50 transition-colors">
          Print
          <Printer size={20} />
        </button>
      </div>

      <div className="flex flex-1">
        <Input
          // @ts-expect-error @TODO: Fix this
          prefix={
            <Search
              size={18}
              className="text-slate-400 group-focus-within:text-primary"
            />
          }
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="rounded-xl"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
};

export default TableFilter;
