import { z } from "zod";

import { activeStatus } from "#/modules/assets/domain/valueObjects/activeStatus";

export const iButton = z.object({
  id: z.number(),
  iButtonNo: z.string(),
  status: activeStatus,
});

export type IButton = z.infer<typeof iButton>;

export const createIButton = (data: IButton) => {
  return iButton.parse(data);
};
