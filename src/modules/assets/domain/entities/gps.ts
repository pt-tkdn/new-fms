import { simCard } from "#/modules/assets/domain/entities/simCard";
import { z } from "zod";

export const gps = z.object({
  id: z.number(),
  imei: z.string(),
  serialNumber: z.string(),
  model: z.string(),
  fuelQuantity: z.number().nullable(),
  fuelPrice: z.number().nullable(),
  accountId: z.number(),
  idGps: z.number(),
  simCard: simCard.nullable(),
  sensors: z.null(),
});

export type GPS = z.infer<typeof gps>;

export const createGPS = (data: GPS) => {
  return gps.parse(data);
};
