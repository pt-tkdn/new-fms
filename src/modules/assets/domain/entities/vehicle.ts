import { z } from "zod";

import { gps } from "#/modules/assets/domain/entities/gps";
import type { Nullable } from "#/shared/core/domain/types/nullable";
import {
  activeStatus,
  fromNumber,
} from "#/shared/core/domain/valueObjects/activeStatus";

export const vehicle = z.object({
  id: z.number(),
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
    .number()
    .nullable()
    .transform((val) => val ?? 0),
  status: activeStatus.nullable().transform((val) => val ?? fromNumber(0)),
  odometer: z
    .number()
    .nullable()
    .transform((val) => val ?? 0),
  position: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .nullable(),
  gps: gps.nullable(),
});

type RawVehicle = Nullable<z.infer<typeof vehicle>>;

export const createVehicle = (data: RawVehicle) => {
  return vehicle.parse(data);
};

export type Vehicle = ReturnType<typeof createVehicle>;
