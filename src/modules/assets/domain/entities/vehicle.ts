import { z } from "zod";

import { gps } from "#/modules/assets/domain/entities/gps";
import type { Nullable } from "#/shared/core/domain/types/nullable";
import { activeStatus } from "#/shared/core/domain/valueObjects/activeStatus";

const vehicle = z.object({
  id: z.number(),
  accountId: z.number(),
  vehicleNo: z.string(),
  vehicleCode: z.string(),
  stnkNumber: z
    .string()
    .nullable()
    .transform((val) => val ?? ""),
  machineNo: z
    .string()
    .nullable()
    .transform((val) => val ?? ""),
  chassisNo: z
    .string()
    .nullable()
    .transform((val) => val ?? ""),
  capacity: z
    .string()
    .nullable()
    .transform((val) => val ?? ""),
  status: activeStatus,
  odometer: z.number(),
  gps: gps.nullable(),
});

type RawVehicle = Nullable<z.infer<typeof vehicle>>;

export const createVehicle = (data: RawVehicle) => {
  return vehicle.parse(data);
};

export type Vehicle = ReturnType<typeof createVehicle>;
