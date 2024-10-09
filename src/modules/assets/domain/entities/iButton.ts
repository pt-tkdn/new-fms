import { z } from "zod";

import { activeStatus } from "#/shared/core/domain/valueObjects/activeStatus";

export const iButton = z.object({
  id: z.number(),
  no: z.string(),
  status: activeStatus,
  driverName: z.string(),
});

export type IButton = z.infer<typeof iButton>;

export const createIButton = (data: IButton) => {
  return iButton.parse(data);
};
