import { z } from "zod";

export const vehicleStatus = z.object({
  label: z.string(),
  data: z.number(),
});

export type VehicleStatus = z.infer<typeof vehicleStatus>;

export const createVehicleStatus = (data: VehicleStatus) => {
  return vehicleStatus.parse(data);
};
