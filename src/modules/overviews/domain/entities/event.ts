import { z } from "zod";

export const event = z.object({
  id: z.number(),
  accountId: z.number(),
  vehicleId: z.number(),
  driverId: z.null(),
  alertId: z.number(),
  type: z.string(),
  message: z.string(),
  lat: z.number(),
  lng: z.number(),
  speed: z.number(),
  additional: z.string(),
  status: z.number(),
  createdAt: z.date(),
  account: z.null(),
  vehicle: z.null(),
  driver: z.null(),
  alert: z.null(),
});

export type Event = z.infer<typeof event>;
