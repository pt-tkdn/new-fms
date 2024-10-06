"use client";

import { useGPSQuery } from "#/modules/application/hooks/useGPSQuery";
import { GPS } from "#/modules/assets/domain/entities/gps";
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
import TableFilter from "#/shared/core/presentation/TableFilter";
import TablePagination from "#/shared/core/presentation/TablePagination";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

const columnHelper = createColumnHelper<GPS>();

const defaultColumns = [
  columnHelper.accessor("imei", {
    id: "imei",
    header: () => "IMEI",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("simCard.gsmNo", {
    id: "simCard",
    header: () => "SIM Card",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("serialNumber", {
    id: "serialNumber",
    header: () => "Serial Number",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("fuelQuantity", {
    id: "fuelQuantity",
    header: () => "Km / L",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("fuelPrice", {
    id: "fuelPrice",
    header: () => "Fuel Price / L",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.display({
    id: "action",
    header: () => "Action",
    cell: (_) => <span className="text-blue-500">TODO</span>,
  }),
];

const fallbackData: GPS[] = Array(10).fill({} as unknown as GPS);

const GPSTable = () => {
  const account = useAccountState();
  const { data, isFetching } = useGPSQuery(account?.id);

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
    getCoreRowModel: getCoreRowModel<GPS>(),
    getFilteredRowModel: getFilteredRowModel<GPS>(),
    getPaginationRowModel: getPaginationRowModel<GPS>(),
  });

  return (
    <>
      <TableFilter
        onRowChange={table.setPageSize}
        onSearchChange={table.setGlobalFilter}
      />

      <section className="flex card p-5 space-y-4">
        <Table>
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
                            header.getContext()
                          )}
                        </TableHead>
                      );
                    }
                    return (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
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
                          cell.getContext()
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

export default GPSTable;
