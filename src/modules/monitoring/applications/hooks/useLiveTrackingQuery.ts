import { useQuery } from "@tanstack/react-query";

import monitoringRepositoryImpl from "#/modules/monitoring/data/monitoringRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useLiveTrackingQuery = (accountId = 0) => {
  return useQuery({
    queryKey: queryKeys.liveTrackingByAccountId(accountId),
    queryFn: async () => {
      return monitoringRepositoryImpl.getVehiclePositionsByAccountId(accountId);
    },
    enabled: accountId !== 0,
    refetchInterval: 5000,
  });
};
