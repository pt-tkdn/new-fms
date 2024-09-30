import { z } from "zod";

const user = z.object({
  id: z.number(),
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
    })
  ),
  account: z.null().optional(),
});

type RawUser = z.infer<typeof user>;

export const createUser = (data: RawUser) => {
  return user.parse(data);
};

export type User = ReturnType<typeof createUser>;
