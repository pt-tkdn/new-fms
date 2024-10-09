"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useRef } from "react";

import { useRoutesQuery } from "#/modules/configurations/applications/useRoutesQuery";
import type { Route } from "#/modules/configurations/domain/entities/route";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";
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
import * as exportData from "#/shared/utils/exportData";

const columnHelper = createColumnHelper<Route>();

const defaultColumns = [
  columnHelper.accessor("name", {
    id: "name",
    header: () => "Route Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("code", {
    id: "code",
    header: () => "Route Code",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("start", {
    id: "start",
    header: () => "Start",
    cell: (info) => info.getValue()?.name,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("end", {
    id: "end",
    header: () => "End",
    cell: (info) => info.getValue()?.name,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("distance", {
    id: "distance",
    header: () => "Distance (km)",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("color", {
    id: "color",
    header: () => "Color",
    cell: (info) => (
      <span
        // className={`p-1`}
        style={{
          backgroundColor: info.getValue(),
          padding: "4px",
        }}
      >
        {info.getValue()}
      </span>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("direction", {
    id: "direction",
    header: () => "Direction",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    id: "status",
    header: () => "Status",
    cell: (info) =>
      info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1),
    footer: (info) => info.column.id,
  }),
  columnHelper.display({
    id: "action",
    header: () => "Action",
    cell: (_) => <span className="text-blue-500">TODO</span>,
  }),
];

const fallbackData: Route[] = Array(10).fill({} as unknown as Route);

const RoutesTable = () => {
  const account = useAccountState();
  const { data, isFetching } = useRoutesQuery(account?.id);
  const { toast } = useToast();
  const tableRef = useRef<HTMLTableElement>(null);

  const rowsData = useMemo(() => {
    if (isFetching) return fallbackData;

    return data ?? [];
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
    getCoreRowModel: getCoreRowModel<Route>(),
    getFilteredRowModel: getFilteredRowModel<Route>(),
    getPaginationRowModel: getPaginationRowModel<Route>(),
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
        "Route Name": row.original.name,
        "Route Code": row.original.code,
        Start: row.original.start?.name ?? "",
        End: row.original.end?.name ?? "",
        "Distance (km)": row.original.distance,
        Color: row.original.color,
        Direction: row.original.direction,
        Status: row.original.status,
      };
    });

    if (type === "Excel") {
      return exportData.asXLSX(rows, "routes");
    }
    if (type === "CSV") {
      return exportData.asCSV(rows, "routes");
    }

    return exportData.asPDF(tableRef.current!, "routes");
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
                    if (header.id === "imei") {
                      return (
                        <TableHead key={header.id} className="w-48">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </TableHead>
                      );
                    }
                    return (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
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

export default RoutesTable;
