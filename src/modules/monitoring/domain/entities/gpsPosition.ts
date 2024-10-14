import { z } from "zod";

import type { Nullable } from "#/shared/core/domain/types/nullable";

const sensor = z.object({
  id: z.number(),
  type: z.string(),
  name: z.string(),
  value: z.string(),
  val: z.union([z.boolean(), z.number(), z.string()]),
});

const tail = z.object({
  lat: z.string(),
  lng: z.string(),
});

export const gpsPosition = z.object({
  id: z.number(),
  time: z.string(),
  lat: z.number(),
  lng: z.number(),
  course: z.number(),
  online: z.string(),
  speed: z.number(),
  altitude: z.number(),
  stopDuration: z.string(),
  movedTimestamp: z.number(),
  address: z.string(),
  tail: z.array(tail),
  sensors: z.array(sensor),
});

type RawGpsPosition = Nullable<z.infer<typeof gpsPosition>>;

export const createGpsPosition = (data: RawGpsPosition) => {
  return gpsPosition.parse(data);
};

export type GpsPosition = z.infer<typeof gpsPosition>;
