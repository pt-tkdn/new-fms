import { z } from "zod";

import { iButton } from "#/modules/assets/domain/entities/iButton";
import { activeStatus } from "#/modules/assets/domain/valueObjects/activeStatus";

const driver = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  licenseNumber: z.string(),
  licenseType: z.string(),
  licenseExpired: z.string(),
  phone: z.string(),
  gender: z.string(),
  address: z.string(),
  ktpNumber: z.string(),
  status: activeStatus,
  iButton: iButton.nullable(),
});

export type Driver = z.infer<typeof driver>;

export const createDriver = (data: Driver) => {
  return driver.parse(data);
};
