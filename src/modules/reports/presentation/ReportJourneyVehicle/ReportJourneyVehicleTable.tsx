"use client";

import {
  CaretSortIcon,
  CaretUpIcon,
  CaretDownIcon,
} from "@radix-ui/react-icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useRef } from "react";

import { useReportJourneyVehicle } from "#/modules/reports/application/hooks/useReportJourneyVehicle";
import type { ReportJourneyVehicle } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import { Button } from "#/shared/components/ui/button";
import { Skeleton } from "#/shared/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "#/shared/components/ui/table";
import type { ExportType } from "#/shared/core/presentation/TableFilter";
import TableFilter from "#/shared/core/presentation/TableFilter";
import TablePagination from "#/shared/core/presentation/TablePagination";
import { useToast } from "#/shared/hooks/use-toast";
import { sumDuration } from "#/shared/lib/utils";
import * as exportData from "#/shared/utils/exportData";

const columnHelper = createColumnHelper<ReportJourneyVehicle>();

const defaultColumns = [
  columnHelper.accessor("start", {
    id: "start",
    header: () => "Start Time",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "datetime",
    sortDescFirst: false,
  }),
  columnHelper.accessor("end", {
    id: "end",
    header: () => "End Time",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "datetime",
    sortDescFirst: false,
  }),
  columnHelper.accessor("startLocation", {
    id: "startLocation",
    header: () => "Start Location",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "datetime",
  }),
  columnHelper.accessor("endLocation", {
    id: "endLocation",
    header: () => "End Location",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("duration", {
    id: "duration",
    header: () => "Duration",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("distance", {
    id: "distance",
    header: () => "Distance",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),

  columnHelper.accessor("topSpeed", {
    id: "topSpeed",
    header: () => "Top Speed",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("averageSpeed", {
    id: "averageSpeed",
    header: () => "Average Speed",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),

  columnHelper.accessor("fuelConsumptionGps", {
    id: "fuelConsumptionGps",
    header: () => "Fuel Consumption (GPS)",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("fuelPriceGps", {
    id: "fuelPriceGps",
    header: () => "Fuel Price (GPS)",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortingFn: "alphanumeric",
  }),
];

const fallbackData: ReportJourneyVehicle[] = Array(10).fill(
  {} as unknown as ReportJourneyVehicle,
);

const ReportJourneyVehicleTable = () => {
  const { data, isFetching, error } = useReportJourneyVehicle();
  const { toast } = useToast();
  const tableRef = useRef<HTMLTableElement>(null);

  console.log("data", data);
  console.log("isFetching", isFetching);
  console.log("error", error);

  const rowsData = useMemo(() => {
    if (isFetching) return fallbackData;

    if (data && data.length) {
      const copyData = [...(data ?? [])];

      const lastIndex = copyData.length - 1;

      const totalDuration = copyData.reduce((acc, curr, index) => {
        if (index === lastIndex) return acc;
        return sumDuration(acc, curr.duration);
      }, "0s");
      console.log("totalDuration", totalDuration);
      copyData[lastIndex].duration = totalDuration;
      return copyData;
    }

    return [];
  }, [data, isFetching]);

  const columns = useMemo(() => {
    if (isFetching) {
      return defaultColumns.map((column) => ({
        ...column,
        cell: () => <Skeleton className="w-4/5 h-3 rounded-sm" />,
      }));
    }

    return defaultColumns;
  }, [isFetching]);

  const table = useReactTable({
    columns: columns,
    data: rowsData,
    getCoreRowModel: getCoreRowModel<ReportJourneyVehicle>(),
    getFilteredRowModel: getFilteredRowModel<ReportJourneyVehicle>(),
    getPaginationRowModel: getPaginationRowModel<ReportJourneyVehicle>(),
    getSortedRowModel: getSortedRowModel<ReportJourneyVehicle>(),
    initialState: {
      sorting: [
        {
          id: "start",
          desc: false,
        },
      ],
    },
  });

  const onExport = (type: ExportType) => {
    if (!table.getFilteredRowModel().rows.length) {
      return toast({
        variant: "destructive",
        title: "No data to export",
        description: "Please try again",
        duration: 5000,
      });
    }

    const rows = table.getFilteredRowModel().rows.map((row) => {
      return {
        "Start Time": row.original.start,
        "End Time": row.original.end,
        "End Location": row.original.endLocation,
        Duration: row.original.duration,
        Distance: row.original.distance,
        "Top Speed": row.original.topSpeed,
        "Average Speed": row.original.averageSpeed,
        "Fuel Consumption (GPS)": row.original.fuelConsumptionGps,
        "Fuel Price (GPS)": row.original.fuelPriceGps,
      };
    });

    if (type === "Excel") {
      return exportData.asXLSX(rows, "vehicles");
    }
    if (type === "CSV") {
      return exportData.asCSV(rows, "vehicles");
    }

    return exportData.asPDF(tableRef.current!, "vehicles");
  };

  return (
    <>
      <TableFilter
        onRowChange={table.setPageSize}
        onSearchChange={table.setGlobalFilter}
        onExport={onExport}
      />

      <section className="flex card p-5 space-y-4">
        <Table ref={tableRef}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroups) => {
              return (
                <TableRow key={headerGroups.id}>
                  {headerGroups.headers.map((header) => {
                    const isSorted = header.column.getIsSorted();

                    return (
                      <TableHead key={header.id}>
                        <Button
                          variant="ghost"
                          className="bg-transparent hover:bg-transparent p-0"
                          onClick={() =>
                            header.column.toggleSorting(
                              header.column.getIsSorted() === "asc",
                            )
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {!isSorted ? (
                            <CaretSortIcon className="ml-1 h-4 w-4" />
                          ) : isSorted === "asc" ? (
                            <CaretUpIcon className="text-primary ml-1 h-4 w-4" />
                          ) : (
                            <CaretDownIcon className="text-primary ml-1 h-4 w-4" />
                          )}
                        </Button>
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>

      <TablePagination
        total={table.getCoreRowModel().rows.length}
        perPage={table.getState().pagination.pageSize}
        currentPage={table.getState().pagination.pageIndex}
        onPageChange={table.setPageIndex}
        canPrevious={table.getCanPreviousPage()}
        canNext={table.getCanNextPage()}
      />
    </>
  );
};

export default ReportJourneyVehicleTable;
