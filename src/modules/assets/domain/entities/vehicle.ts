import { z } from "zod";

import { gps } from "#/modules/assets/domain/entities/gps";
import { activeStatus } from "#/modules/assets/domain/valueObjects/activeStatus";

const vehicle = z.object({
  id: z.number(),
  accountId: z.number(),
  vehicleNo: z.string(),
  vehicleCode: z.string(),
  stnkNumber: z.any().nullable(),
  machineNo: z.any().nullable(),
  chassisNo: z.any().nullable(),
  capacity: z.any().nullable(),
  status: activeStatus,
  odometer: z.number(),
  gps: gps.nullable(),
});

export type Vehicle = z.infer<typeof vehicle>;

export const createVehicle = (data: Vehicle) => {
  return vehicle.parse(data);
};
