"use client";
import dayjs from "dayjs";

import { useDashboardQuery } from "#/modules/overviews/application/hooks/useDashboardQuery";
import { Button } from "#/shared/components/ui/button";
import { Skeleton } from "#/shared/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/shared/components/ui/table";

export default function RecentEvents() {
  return (
    <section className="card p-5 space-y-4">
      <h2 className="text-xl font-bold">Recent Events</h2>
      <Table>
        {/* <TableCaption>A list of recent events</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Time</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Vehicle Code</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <RecentEventsList />
        </TableBody>
      </Table>
    </section>
  );
}

const RecentEventsList = () => {
  const { data, isPending, isSuccess } = useDashboardQuery();

  if (isSuccess && !data?.recentEvents.length) {
    return (
      <TableRow className="h-52 hover:bg-inherit">
        <TableCell colSpan={6}>
          <div className="text-center">No recent events</div>
        </TableCell>
      </TableRow>
    );
  }

  if (isPending) {
    return Array.from({ length: 5 }, (_, i) => i).map((_, index) => {
      return (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>

          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>

          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>

          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>

          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>

          <TableCell>
            <Skeleton className="w-4/5 h-3 rounded-sm" />
          </TableCell>
        </TableRow>
      );
    });
  }

  return data?.recentEvents.map((event) => {
    return (
      <TableRow key={event.id}>
        <TableCell>
          {dayjs(event.createdAt).format("DD MMM YYYY, HH:mm:ss")}
        </TableCell>
        <TableCell>{event.vehicle}</TableCell>
        <TableCell>{event.vehicleId}</TableCell>
        <TableCell>{event.driver}</TableCell>
        <TableCell>{event.type}</TableCell>
        <TableCell className="text-blue-400">
          <Button variant="link" className="p-0">
            View on map
          </Button>
        </TableCell>
      </TableRow>
    );
  });
};
