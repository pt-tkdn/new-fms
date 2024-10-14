import { useQuery } from "@tanstack/react-query";

import monitoringRepositoryImpl from "#/modules/monitoring/data/monitoringRepositoryImpl";

export const useLiveTrackingQuery = (accountId = 0) => {
  return useQuery({
    queryKey: ["liveTracking", accountId],
    queryFn: async () => {
      return monitoringRepositoryImpl.getVehiclePositionsByAccountId(accountId);
    },
    enabled: accountId !== 0,
    refetchInterval: 5000,
  });
};
