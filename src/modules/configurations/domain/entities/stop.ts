import { z } from "zod";

import { activeStatus } from "#/shared/core/domain/valueObjects/activeStatus";

export const stop = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  address: z.string(),
  lat: z.number(),
  lng: z.number(),
  radius: z.number(),
  description: z.string(),
  status: activeStatus,
  polygon: z.array(z.unknown()).nullable(),
});

export type Stop = z.infer<typeof stop>;

export const createStops = (data: Stop) => {
  return stop.parse(data);
};
