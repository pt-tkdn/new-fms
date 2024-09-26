import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "#/shared/components/ui/table";
import dayjs from "dayjs";

const recentEvents = [
  {
    imei: dayjs().unix(),
    vehicle: "Toyota Avanza",
    vehicleCode: "AVZ-001",
    driverName: "John Doe",
    event: "Speeding",
  },
  {
    imei: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .unix(),
    vehicle: "Honda Jazz",
    vehicleCode: "JAZ-001",
    driverName: "Jane Doe",
    event: "Sleeping",
  },

  {
    imei: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .unix(),
    vehicle: "Honda Civic",
    vehicleCode: "CVC-001",
    driverName: "Jane Doe",
    event: "Smoke Detected",
  },

  {
    imei: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .unix(),
    vehicle: "Mitsubishi Pajero",
    vehicleCode: "PJR-199",
    driverName: "Mike Doe",
    event: "Driver Fatigue",
  },
  {
    imei: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .unix(),
    vehicle: "Toyota Alphard",
    vehicleCode: "ALP-001",
    driverName: "Rachel Doe",
    event: "Speeding",
  },
];
const GPSList = () => {
  return (
    <section className="flex card p-5 space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Time</TableHead>
            <TableHead>Sim Card</TableHead>
            <TableHead>Serial Number</TableHead>
            <TableHead>Km / L</TableHead>
            <TableHead>Fuel Price / L</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentEvents.map((event) => {
            return (
              <TableRow key={event.imei}>
                <TableCell>{event.imei}</TableCell>
                <TableCell>{event.vehicle}</TableCell>
                <TableCell>{event.vehicleCode}</TableCell>
                <TableCell>{event.driverName}</TableCell>
                <TableCell>{event.event}</TableCell>
                <TableCell className="text-blue-500">TODO</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default GPSList;
