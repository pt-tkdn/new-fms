import { z } from "zod";

const account = z.object({
  id: z.number(),
  name: z.string(),
});

export type Account = z.infer<typeof account>;

export const createAccount = (data: Account) => {
  return account.parse(data);
};
