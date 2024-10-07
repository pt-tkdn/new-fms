import { z } from "zod";

const user = z.object({
  id: z.number(),
  accessToken: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  type: z.number(),
  status: z.number(),
  lastLogin: z.string(),
  capabilities: z.array(
    z.object({
      capabilityId: z.number(),
      capability: z.string(),
      isAble: z.boolean(),
    }),
  ),
  account: z.null().optional(),
});

export const createUser = (data: User) => {
  return user.parse(data);
};

export type User = z.infer<typeof user>;
