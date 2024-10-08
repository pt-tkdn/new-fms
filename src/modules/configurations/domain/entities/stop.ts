import { z } from "zod";

export const stops = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  address: z.string(),
  lat: z.number(),
  lng: z.number(),
  radius: z.number(),
  description: z.string(),
  status: z.number(),
  polygon: z.array(z.unknown()),
});

export type Stop = z.infer<typeof stops>;

export const createStops = (data: Stop) => {
  return stops.parse(data);
};
