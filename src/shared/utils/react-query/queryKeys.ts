export const queryKeys = {
  dashboard: ["dashboard"],
  accounts: ["accounts"],
  gpsByAccountId: (accountId: number) => ["gps", accountId],
  simCardsByAccountId: (accountId: number) => ["simCards", accountId],
  driversByAccountId: (accountId: number) => ["drivers", accountId],
  vehiclesByAccountId: (accountId: number) => ["vehicles", accountId],
  iButtonsByAccountId: (accountId: number) => ["iButtons", accountId],
  stopsByAccountId: (accountId: number) => ["stops", accountId],
  liveTrackingByAccountId: (accountId: number) => ["liveTracking", accountId],
  reportsJourneyVehicle: ["reports-journey-vehicle"],
  reportsGraphSensors: ["reports-graph-sensors"],
};
