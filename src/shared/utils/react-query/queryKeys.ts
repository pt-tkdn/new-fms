export const queryKeys = {
  dashboard: ["dashboard"],
  accounts: ["accounts"],
  gpsByAccountId: (accountId: number) => ["gps", accountId],
  simCardsByAccountId: (accountId: number) => ["simCards", accountId],
};
