import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/shared/components/ui/table";
import dayjs from "dayjs";

const recentEvents = [
  {
    time: dayjs().format("DD MMM YYYY, HH:mm:ss"),
    vehicle: "Toyota Avanza",
    vehicleCode: "AVZ-001",
    driverName: "John Doe",
    event: "Speeding",
  },
  {
    time: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .format("DD MMM YYYY, HH:mm:ss"),
    vehicle: "Honda Jazz",
    vehicleCode: "JAZ-001",
    driverName: "Jane Doe",
    event: "Sleeping",
  },

  {
    time: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .format("DD MMM YYYY, HH:mm:ss"),
    vehicle: "Honda Civic",
    vehicleCode: "CVC-001",
    driverName: "Jane Doe",
    event: "Smoke Detected",
  },

  {
    time: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .format("DD MMM YYYY, HH:mm:ss"),
    vehicle: "Mitsubishi Pajero",
    vehicleCode: "PJR-199",
    driverName: "Mike Doe",
    event: "Driver Fatigue",
  },
  {
    time: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .format("DD MMM YYYY, HH:mm:ss"),
    vehicle: "Toyota Alphard",
    vehicleCode: "ALP-001",
    driverName: "Rachel Doe",
    event: "Speeding",
  },
];

export default function RecentEvents() {
  return (
    <section className="card p-5 space-y-4">
      <h2 className="text-xl font-bold">Recent Events</h2>
      <Table>
        <TableCaption>A list of recent events</TableCaption>
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
          {recentEvents.map((event) => {
            return (
              <TableRow key={event.time}>
                <TableCell>{event.time}</TableCell>
                <TableCell>{event.vehicle}</TableCell>
                <TableCell>{event.vehicleCode}</TableCell>
                <TableCell>{event.driverName}</TableCell>
                <TableCell>{event.event}</TableCell>
                <TableCell className="text-blue-400">Unknown</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
