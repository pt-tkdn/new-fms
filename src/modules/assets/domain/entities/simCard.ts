import { z } from "zod";

export const simCard = z.object({
  id: z.number(),
  accountId: z.number(),
  gsmNo: z.string(),
  operator: z.string(),
  msidn: z.string(),
  imsi: z.string(),
  status: z.number(),
});

export type SimCard = z.infer<typeof simCard>;

export const createSimCard = (data: SimCard) => {
  return simCard.parse(data);
};