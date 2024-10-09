import { z } from "zod";

import { stop } from "#/modules/configurations/domain/entities/stop";
import { activeStatus } from "#/shared/core/domain/valueObjects/activeStatus";

export const route = z.object({
  id: z.number(),
  accountId: z.number(),
  name: z.string(),
  code: z.string(),
  start: stop.nullable(),
  end: stop.nullable(),
  distance: z.number(),
  direction: z.number(),
  color: z.string(),
  status: activeStatus,
  idAlert: z.number(),
  stops: z.array(stop).nullable(),
});

export type Route = z.infer<typeof route>;

export const createRoute = (data: Route) => {
  return route.parse(data);
};
