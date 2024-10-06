import { z } from "zod";

export const activeStatus = z.enum(["active", "inactive"]);

export type ActiveStatus = z.infer<typeof activeStatus>;

export const fromNumber = (value: number): ActiveStatus => {
  if (value === 0) {
    return "inactive";
  }
  return "active";
};

export const createActiveStatus = (data: ActiveStatus) => {
  return activeStatus.parse(data);
};
