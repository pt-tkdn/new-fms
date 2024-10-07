"use client";

import { useMemo, useRef } from "react";
import { useDriverQuery } from "#/modules/application/hooks/useDriverQuery";
import { Driver } from "#/modules/assets/domain/entities/driver";
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
import TableFilter, {
  ExportType,
} from "#/shared/core/presentation/TableFilter";
import TablePagination from "#/shared/core/presentation/TablePagination";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as exportData from "#/shared/utils/exportData";
import { useToast } from "#/shared/hooks/use-toast";

const columnHelper = createColumnHelper<Driver>();

const defaultColumns = [
  columnHelper.accessor("name", {
    id: "name",
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("code", {
    id: "code",
    header: () => "Driver Code",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("iButton.iButtonNo", {
    id: "iButton",
    header: () => "iButton No",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("licenseNumber", {
    id: "licenseNumber",
    header: () => "License Number",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("phone", {
    id: "phone",
    header: () => "Phone Number",
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

const fallbackData: Driver[] = Array(10).fill({} as unknown as Driver);

const DriversTable = () => {
  const account = useAccountState();
  const { data, isFetching } = useDriverQuery(account?.id);
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
    getCoreRowModel: getCoreRowModel<Driver>(),
    getFilteredRowModel: getFilteredRowModel<Driver>(),
    getPaginationRowModel: getPaginationRowModel<Driver>(),
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
        Name: row.original.name,
        "Driver Code": row.original.code,
        "iButton No": row.original.iButton?.iButtonNo ?? "",
        "License Number": row.original.licenseNumber ?? "",
        "Phone Number": row.original.phone ?? "",
        Status: row.original.status,
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

export default DriversTable;
